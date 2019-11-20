$(document).ready(function() {
  // code will run once the DOM is ready

  // intro
  const intro = `<div class='speech-bubble bot'>Hi there, I'm Eve. 🙎 Your personal online therapist. I'm here to help you.</div>`;

  // store id='output' in output variable
  const output = document.getElementById('output');

  // store bot icon in botIcn variable
  const botIcn = `<div class='icn-bot'></div>`;

  // store user icon in botIcn variable
  const userIcn = `<div class='icn-user'></div>`;

  // output intro;
  output.innerHTML += `<div class='bot-chat'>${botIcn} ${intro}</div>`;
  $('.bot-chat').fadeIn();

  // first question
  let question = `<div class='speech-bubble bot'>What is your name?</div>`;

  // outputs first question after 0.5sec
  setTimeout(function() {
    output.innerHTML += `<div class='bot-chat'>${botIcn} ${question}</div>`;
    $('.bot-chat').fadeIn(); // fadein effect
  }, 500);

  // input from user count start at 0
  var inputNum = 0;

  function chatbot() {
    // get user's input value and assigns to the variable input
    const input = document.getElementById('input').value;

    if (inputNum === 0) {
      // outputs user's input
      output.innerHTML += `<div class='user-chat'><div class='speech-bubble user'>${input}</div>${userIcn}</div>`;
      $('.user-chat').fadeIn();

      // outputs bot's msg after 0.5sec
      setTimeout(function() {
        output.innerHTML += `<div class='bot-chat'>${botIcn}<div class='speech-bubble bot'>Hello ${input}. 🙂 Nice to meet you!</div></div>`;
        $('.bot-chat').fadeIn(); // fadein effect
      }, 500);

      // clear input box
      document.getElementById('input').value = '';

      // load next question
      question = `<div class='speech-bubble bot'>How are you feeling today?</div>`;

      // output next question after 1sec
      setTimeout(function() {
        output.innerHTML += `<div class='bot-chat'>${botIcn}${question}</div>`;
        $('.bot-chat').fadeIn(); // fadein effect
      }, 1000);
    } else if (inputNum === 1) {
      // outputs user answer
      output.innerHTML += `<div class='user-chat'><div class='speech-bubble user'>${input}</div>${userIcn}</div>`;
      $('.user-chat').fadeIn();

      // scroll output window to the bottom
      $('#output')
        .stop()
        .animate({ scrollTop: $('#output')[0].scrollHeight }, 1000);

      // clear input box
      document.getElementById('input').value = '';

      // load next question
      question = `<div class='speech-bubble bot'>So please tell me, what brings you here today?</div>`;

      // output next question after 1sec
      setTimeout(function() {
        output.innerHTML += `<div class='bot-chat'>${botIcn}${question}</div>`;
        $('.bot-chat').fadeIn(); // fadein effect
      }, 1000);
    } else if (inputNum >= 2) {
      // outputs user answer
      output.innerHTML += `<div class='user-chat'><div class='speech-bubble user'>${input}</div>${userIcn}</div>`;
      $('.user-chat').fadeIn();

      // scroll output window to the bottom
      $('#output')
        .stop()
        .animate({ scrollTop: $('#output')[0].scrollHeight }, 1000);

      // clear input box
      document.getElementById('input').value = '';

      setTimeout(randomQuestion, 2000);
    }
  }

  // array of bot questions
  const questions = [
    'Please, tell me more about that..',
    'Have you ever seen a counselor before?',
    'What is the problem from your viewpoint?',
    'How does this problem typically make you feel?',
    'What makes the problem better?',
    'If you could wave a magic wand, what positive changes would you make happen in your life?',
    'Overall, how would you describe your mood?',
    'What do you expect from the counseling process?',
    'What would it take to make you feel more content, happier and more satisfied?',
    'Do you consider yourself to have a low, average or high interpersonal IQ?',
    'What are your goals for this therapy?',
    'What are you hoping to get out of therapy?',
    'If you had a magic red button in front of you, that if you pressed it would make your problem disappear, would you press it?',
    'If you woke up tomorrow and you no longer had your problem, what would your life be like? How would you know your problem was gone?',
    'Can you tell me more about that?',
    'How are you sleeping these days?',
    'How much exercise are you getting?',
  ];

  // function that generates a random question
  function randomQuestion() {
    let randomNum = Math.floor(Math.random() * questions.length);
    output.innerHTML +=
      botIcn + `<div class='speech-bubble bot'>${questions[randomNum]}</div>`;
    $('#output')
      .stop()
      .animate({ scrollTop: $('#output')[0].scrollHeight }, 1000);
  }

  // when the user press the enter key, the bot function will run and questioNum will increase by 1
  $(input).keypress(function(e) {
    if (e.which == 13) {
      chatbot(); // run bot function when enter key pressed
      inputNum++; // increase questionNum count by 1
    }
  });
});
