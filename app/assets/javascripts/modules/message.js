$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main-chat__message-info__message-list" data-message-id=${message.id}>
          <div class="main-chat__message-info__message-list__message-box">
            <div main-chat__message-info__message-list__message-box__info">
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
          <div class="main-chat__message-info__message-list__message-box__message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
      </div>`
      return html;
    };
  }

  $('.main-chat__message-form__group').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-chat__message-info').append(html);      
      $('form')[0].reset();
      $('.main-chat__message-info').animate({ scrollTop: $('.main-chat__message-info')[0].scrollHeight});
      $('.main-chat__message-form__group__submit__btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
  });
  
});
