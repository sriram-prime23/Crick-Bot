var input = document.getElementById("user");
var btn = document.getElementById("send");
var chatarea = document.getElementById("chatarea");
var body =document.getElementById("body")
var setall=document.getElementById("settings")
var x =document.getElementById("x");
var welcome=document.getElementById("welcome");
function go() {
    // Create user message and append
    var mess = input.value.toLowerCase();

    mess.trim();
    
    var chat = document.createElement("div");
    chat.innerHTML = mess;
    var br = document.createElement("br");
    var logo1 = document.createElement("div");
    logo1.id = "userpic";
    logo1.innerHTML = '<img src="free-user-icon-3296-thumb.png" alt="user">';
    chatarea.append(logo1);
    chat.id = "usersend";
    chatarea.append(br);
    chatarea.append(chat);

    // Add bot response
    var botpic = document.createElement("div");
    botpic.id = "botpic";
    chatarea.append(botpic);
    botpic.innerHTML = '<img id="bot" src="ai.jpg" alt="Bot">';


    

    var botchat = document.createElement("div");

    var botanim=document.createElement("div");

    var pulli=document.createElement("p")

   

    pulli.id="pulli"

        botanim.append(pulli);

        botanim.id="bani";

        botanim.innerHTML='<span id="pu">...</span>';
   
        chatarea.append(botanim);

    botchat.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, animi voluptates at amet nihil minima assumenda nulla tempore architecto. Perspiciatis, porro animi. Quod enim corrupti eos corporis assumenda rerum praesentium!";
    botchat.id = "botsend";
    chatarea.append(botchat);

    // Auto-scroll to the bottom after each message
    chatarea.scrollTop = chatarea.scrollHeight;

    // Clear the input field
    input.value = "";

  





    //if else
    if (/\b(virat kohli|kholi)\b/.test(mess)) {
        botchat.innerHTML = `<h3>Virat Kohli</h3>
        <b>Here is the information about this player:</b> 
        Virat Kohli is one of the greatest batsmen in modern cricket, known for his aggression, consistency, and unmatched hunger for runs. 
        He has been a key player for India across all formats, holding numerous records, including the fastest to 8,000, 9,000, 10,000, and 11,000 ODI runs. 
        His batting technique, combined with his fitness and leadership skills, has made him one of the best captains India has ever seen. 
        Kohli has led India to historic Test series wins overseas and played crucial innings in ICC tournaments. His dominance in chases, ability to anchor innings, and adaptability to different formats make him a modern-day legend.`;
    
    } else if (/\b(ms dhoni|dhoni|mahi)\b/.test(mess)) {
        botchat.innerHTML = `<h3>MS Dhoni</h3>
        <b>Here is the information about this player:</b> 
        MS Dhoni, often referred to as 'Captain Cool,' is widely regarded as one of the best captains in cricket history. 
        He led India to multiple ICC trophies, including the 2007 T20 World Cup, 2011 ODI World Cup, and 2013 Champions Trophy. 
        His ability to stay calm under pressure, exceptional finishing skills, and lightning-fast wicketkeeping made him a cricketing icon. 
        He is known for his powerful helicopter shot and his ability to guide young cricketers. Dhoni's leadership transformed Indian cricket, making them a dominant force in world cricket.`;
    
    } else if (/\b(rohit sharma|hitman|rohit)\b/.test(mess)) {
        botchat.innerHTML = `<h3>Rohit Sharma</h3>
        <b>Here is the information about this player:</b> 
        Rohit Sharma, also known as 'Hitman,' is one of the most elegant and destructive batsmen in cricket. 
        He holds the record for the highest individual score in ODIs (264 runs) and is the only player to have scored three double centuries in ODIs. 
        His impeccable timing, patience, and ability to play big innings make him a vital player for India. 
        As a captain, he has led Mumbai Indians to multiple IPL titles, proving his leadership skills.`;
    
    } else if (/\b(sachin tendulkar|sachin|god of cricket)\b/.test(mess)) {
        botchat.innerHTML = `<h3>Sachin Tendulkar</h3>
        <b>Here is the information about this player:</b> 
        Sachin Tendulkar, known as the 'God of Cricket,' is the highest run-scorer in international cricket history. 
        With over 34,000 international runs and 100 international centuries, he is considered one of the greatest cricketers of all time. 
        His career spanned over two decades, during which he inspired millions. He played a key role in India's 2011 World Cup victory and has been honored with India's highest sporting awards.`;
    
    } else if (/\b(ab de villiers|abd|mr 360)\b/.test(mess)) {
        botchat.innerHTML = `<h3>AB de Villiers</h3>
        <b>Here is the information about this player:</b> 
        AB de Villiers, famously known as 'Mr. 360,' is renowned for his ability to play shots all around the ground. 
        He holds the record for the fastest ODI century (31 balls) and is one of the most innovative batsmen ever. 
        His versatility in adapting to different formats, combined with his ability to change games single-handedly, has made him a fan favorite worldwide.`;
    
    } else if (/\b(chris gayle|gayle|universe boss)\b/.test(mess)) {
        botchat.innerHTML = `<h3>Chris Gayle</h3>
        <b>Here is the information about this player:</b> 
        Chris Gayle, known as the 'Universe Boss,' is one of the most destructive T20 batsmen ever. 
        He has hit over 1,000 sixes in professional cricket and holds the record for the highest individual score in T20s (175*). 
        His fearless batting, coupled with his fun-loving personality, has made him one of the most entertaining cricketers in history.`;
    
    } else if (/\b(kane williamson|williamson)\b/.test(mess)) {
        botchat.innerHTML = `<h3>Kane Williamson</h3>
        <b>Here is the information about this player:</b> 
        Kane Williamson is one of the most technically gifted batsmen in modern cricket. 
        He led New Zealand to their first ICC title, winning the World Test Championship in 2021. 
        His calm and composed nature, combined with his sportsmanship and leadership, make him one of the most respected cricketers globally.`;
    
    } else if (/\b(ben stokes|stokes)\b/.test(mess)) {
        botchat.innerHTML = `<h3>Ben Stokes</h3>
        <b>Here is the information about this player:</b> 
        Ben Stokes is one of the best all-rounders in modern cricket. 
        He played a heroic innings in the 2019 World Cup final, leading England to their first-ever World Cup victory. 
        His aggressive batting, match-winning abilities, and incredible energy on the field make him a crucial asset for England.`;
    
    } else if (/\b(jasprit bumrah|bumrah)\b/.test(mess)) {
        botchat.innerHTML = `<h3>Jasprit Bumrah</h3>
        <b>Here is the information about this player:</b> 
        Jasprit Bumrah is one of the best fast bowlers India has ever produced. 
        Known for his unorthodox bowling action, deadly yorkers, and exceptional control, he has been India's go-to bowler in all formats. 
        His performances in overseas conditions have played a crucial role in India's rise as a dominant Test team.`;
    
    } else if (/\b(ricky ponting|ponting)\b/.test(mess)) {
        botchat.innerHTML = `<h3>Ricky Ponting</h3>
        <b>Here is the information about this player:</b> 
        Ricky Ponting is one of the most successful captains and batsmen in cricket history. 
        He led Australia to consecutive World Cup victories in 2003 and 2007 and was known for his aggressive leadership. 
        With over 27,000 international runs, he remains one of the best batsmen to have ever played the game.`;
    
    } else if (/\b(muttiah muralitharan|muralitharan|murali)\b/.test(mess)) {
        botchat.innerHTML = `<h3>Muttiah Muralitharan</h3>
        <b>Here is the information about this player:</b> 
        Muttiah Muralitharan is the highest wicket-taker in Test cricket with 800 wickets. 
        His unplayable off-spin and variations made him one of the most feared bowlers in history.`;
    
    } else if (/\b(shane warne|warne)\b/.test(mess)) {
        botchat.innerHTML = `<h3>Shane Warne</h3>
        <b>Here is the information about this player:</b> 
        Shane Warne was one of the greatest leg-spinners ever. 
        He took over 1,000 wickets in international cricket and played a crucial role in Australia’s dominance in the late 90s and early 2000s. 
        His famous ‘Ball of the Century’ to Mike Gatting is still considered one of the best deliveries in cricket history.`;
    
    } 
    
    else if(chat.textContent===""){
        botchat.textContent="Type something.."
    }
    
    
    else {
        botchat.innerHTML = `<b>It looks like your question might be unclear.</b> Please ask about a cricket player or rephrase your query, and I'll be happy to assist you!`;
    }
    
    welcome.style.display="none";

    
}
var setdiv =document.createElement("div")

setdiv.id="setdiv"

body.append(setdiv)

setdiv.append(setall);

function set(){
    setdiv.style.marginLeft="10px"
    setdiv.style.transition="0.5s"
  
}

function cc(){
    setdiv.style.marginLeft="-1000px"
       setdiv.style.transition="0.5s"
}


chatarea.append(welcome);