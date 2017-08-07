/*项目的js 组织方式之一 命名空间，不会被污染*/
spa.shell = (function() {
 var configMap = {
    main_html: `
    <div class="spa-shell-head">
        <div class="spa-shell-head-logo"></div>
        <div class="spa-shell-head-acct"></div>
        <div class="spa-shell-head-search"></div>
      </div>
      <div class="spa-shell-main">
        <div class="spa-shell-main-nav"></div>
        <div class="spa-shell-main-content"></div>
      </div>
      <div class="spa-shell-foot"></div>
      <div class="spa-shell-chat"></div>
      <div class="spa-shell-modal"></div>
    </div>`,
    restracted_title: '点击收回',
    extended_title: '点击展开',
    chat_extend_height: 400,
    chat_restract_height: 15,
  }
  var stateMap = {
    $contanier: null,
    is_restract: false,
  }
  var jqueryMap = {}
  function onClickChat() {
    toggleChat();
  }
  function initModule ($container) {
    stateMap.$contanier = $container;
    $container.html(configMap.main_html);
    setJqueryMap();
    jqueryMap.$chat
    .attr('title',configMap.retracted_title)
    .click(onClickChat);
  }
  function toggleChat() {
    // 在没有css3之前，负责页面动画
    //.height()一定可以得到高度
    var px_chat_ht = jqueryMap.$chat.height();
    jqueryMap.$chat.animate({
      height: stateMap.is_restract?configMap.chat_restract_height:configMap.chat_extend_height
    }, 200,function(){
      jqueryMap.$chat
      .attr('title',configMap.extended_title);
    })
    console.log(px_chat_ht);
    stateMap.is_restract = !stateMap.is_restract;
  }
  function setJqueryMap() {
    var $container = stateMap.$contanier;
    jqueryMap = {
      $container,
      $chat: $container.find('.spa-shell-chat')
    }
  }
  return {
    initModule
  }
})();
