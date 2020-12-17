$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main-chat__message-info__message-list" data-message-id=${message.id}>
          <div class="main-chat__message-info__message-list__message-box">
            <div class="main-chat__message-info__message-list__message-box__info">
              <div class="main-chat__message-info__message-list__message-box__info__name">
                ${message.user_name}
              </div>
              <div class="main-chat__message-info__message-list__message-box__info__date">
                ${message.created_at}
              </div>
            </div>
          </div>
            <div class="main-chat__message-info__message-list__message-box__message">
              <p class="Message__content">
                ${message.content}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="main-chat__message-info__message-list" data-message-id=${message.id}>
        <div class="main-chat__message-info__message-list__message-box">
          <div class="main-chat__message-info__message-list__message-box__info">
            <div class="main-chat__message-info__message-list__message-box__info__name">
              ${message.user_name}
            </div>
            <div class="main-chat__message-info__message-list__message-box__info__date">
              ${message.created_at}
            </div>
          </div>
        </div>
        <div class="Message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.main-chat__message-info__message-list').data("message-id") || 0;
    console.log(last_message_id)
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.main-chat__message-info').append(insertHTML);
        $('.main-chat__message-info').animate({ scrollTop: $('.main-chat__message-info')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});