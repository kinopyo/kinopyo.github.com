(function($){
  Array.prototype.shuffle = function() {
    var len = this.length;
    var i = len;
     while (i--) {
      var p = parseInt(Math.random()*len);
      var t = this[i];
      this[i] = this[p];
      this[p] = t;
    }
  };

  // TODO hard coding.
  quotes_json = [
    {text: 'Life’s too short to build something nobody wants.', author: 'Ash Maurya'},
    {text: 'Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime.', author: 'David Leinweber'},
    {text: '小时候，以为世界围着自己转。长大才看清，世界是一台把你越吹越远的电风扇。', author: 'Unknown'},
    {text: '当一个男人说他忘了的时候，只有三种可能：一种是他傻逼了，另一种是因为女人，还有一种是因为女人而傻逼了。', author: 'Unknown'},
    {text: 'おれはこの先剣士と名乗る野郎には、たった一度でも負ける訳にはいかねェんだ!!', author: 'ゾロ'},
    {text: '三本でもおれとお前の剣の、一本の重みは同じじゃねェよ!!!!!', author: 'ゾロ'},
    {text: '日子过得真快，尤其对于中年以后的人，十年八年都好象是指顾间的事。可是对于年轻人，三年五载就可以是一生一世。', author: '张爱玲'},
    {text: '每个人都会经过这个阶段，见到一座山，就想知道山后面是什么。我很想告诉他，可能翻过山后面，你会发现没什么特别。回望之下，可能会觉得这一边更好', author: '《东邪西毒》'},
    {text: "It's not about the cheating. It's about your confidence.You steal that test, and you'll never get it back.", author: 'Forman'},
    {text: '永远那么理智，就永远不会懂得爱情', author: 'Unknown'},
    {text: '幸福如饮水，冷暖自知。 ', author: 'Unknown'},
    {text: '剣豪として最強を目指すと決めた時から命なんてとうに捨ててる ', author: 'ゾロ'},
    {text: '災難ってモンは、たたみかけるのが世の常だ。言い訳したらどなたか助けてくれんのか?死んだらおれはただそこまでの男……!!!', author: 'ゾロ'},
    {text: 'Code wins arguments.', author: 'Zuckerberg'},
    {text: '你认为的因，不一定是因，你认为的果，也不是果。', author: 'Jerry Han'},
    {text: 'まだ暴れたきゃ、この海でおれの名を背負って、好きなだけ暴れてみろ……!!!', author: '白ひげ'},
    {text: ' “Move fast and break things.” The idea is that if you never break anything, you’re probably not moving fast enough.', author: 'Zuckerberg'},
    {text: '精一杯戦って散るのがよい', author: 'ボア・ハンコック'}
  ];
  quotes_json.shuffle();

  $.fn.getQuoteFeed = function(){
    var quotes = $(this),
      feed = quotes.find('.feed'),
      interval = 10000,
      speed = 1000;

    quotes.show();

    var length = quotes_json.length,
      fragment = document.createDocumentFragment(),
      counts = 0,
      timeout;

    for (var i=0; i<length; i++){
      var item = document.createElement('li');
      item.innerHTML = quotes_json[i].text + '<small> — ' + quotes_json[i].author + '</small>';
      fragment.appendChild(item);
    }

    var play = function(){
      timeout = setTimeout(function(){
        feed.animate({top: '-='+60}, speed, function(){
          counts++;
          if (counts == length) {
            feed.css('top', '0');
            counts = 0;
          }

          play();
        });
      }, interval);
    }

    var pause = function(){
      clearTimeout(timeout);
    }
    quotes.on('mouseenter', pause).on('mouseleave', play)
    .children('.loading').hide().end()
    .children('.container').show()
    .children('.feed').append(fragment);

    play();
  };
})(jQuery);