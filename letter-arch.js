/*
* Ze-Ni-1 sent 4/5
* Ze-Ni-2 sent 5/2
* Ze-Ni-3 sent 6/2
* Ze-Ni-4 sent 6/8
* Ze-Ni-5 sent 7/4
* Ze-Ni-6 sent 7/20
 Ni-Ze-1 sent 3/22 
 Ni-Ze-2 sent 4/22
 Ni-Ze-3 sent 5/16
 Ni-Ze-4 sent 6/22
 Da-Ae-1 sent 4/6
 Da-Ae-4 sent 7/14
 Da-Ae-5 sent 8/2
 Da-Ae-6 sent 8/16
 Ae-Da-1
 Ae-Da-2 sent 4/24
 Ae-Da-4 sent 5/24
 Ae-Da-5 sent 7/24
* Ze-Sk-1 sent 4/5
* Ze-Sk-2 sent 4/25
* Ze-Sk-4 sent 6/7
* Ze-Sk-3 sent 5/8
* Ze-Sk-5 sent 7/9
* Sk-Ze-3 sent 7/20
* Ze-Su-2 sent 4/30
* Ze-Su-3 sent 5/30
* Ze-Su-4 sent 7/2
* Ze-Dr-1 sent 7/1
 Dr-Ze-2 sent 7/20
* Ze-Vu-1 sent 6/1
* Vu-Ze-1 sent 6/19
* Ra-Ni-1 sent 7/22
 Su-Ze-3 sent 6/14
 Su-Ze-4 sent 7/14
 Dr-Sk-1 through 13
 Da-Ae-2
 Ae-Da-3
? Ze-Su-1
? Su-Ze-1
 Su-Ze-2
 Da-Ae-3
 Ae-Da-4
 Sk-Ze-1
 Dr-Ze-1
*/



function storychars() {return [
  { // ANCHOR Aenna #region[red]
    firstName: 'Aenna',
    lastName: 'Ostodar',
    letters: [{
      id: 'Ae-Da-1',
      conversation: 'Aenna/Davian',
      receiver: 'Davian',
      dateSent: new Date (730, 3, 23),
      dateReceived: new Date (730, 3, 28),
      nextLink: '/pages/Ae-Da-1.vue',
      prevLink: '',
      tag: "Aenna's first letter baiting Davian and asking for information on Selos",
      text: 'Davian, \nI’m glad to hear you escaped Falsk without incident. You gave Freir quite the story to write. I hope you’re okay with a few embellishments, he’s a reporter, after all, and he sometimes can’t help himself. You’ve probably already found the article that came with this letter. Congratulations, you’re famous for the next week or so. Other people would kill for that kind of publicity. In a way, you’ve done just that.\nSadly, I have also recovered. I’m sure you were happy to see me die, but I’m not kind enough to give you the satisfaction. Freir has been a perfect gentleman since my coming home—he’s far better than you ever were.\nAlas, this letter is not simply for pleasantries. I hope you never thought you were special enough to me to merit a personal letter. I’d have completely forgotten you already except that you have information I want. I don’t care enough to not write you out of spite, so here we are.\nI lead you on a number of wild goose chases to find your precious gold orb. One of the people you talked to was a man named Selos Reykspor. I believe it was the second day you were here, but, seeing as I didn’t sleep the four days you were in Falsk, I don’t remember exactly. I was caught up in a number of other things at the time, and forgot to ask what he said to you.\nI’m eager to see Selos rot in prison for some personal injustices he’s committed against me. A hanging would be too quick a death. Starvation is more fitting. I’ll have him beg for his life, then his death, and I’ll give him neither.\nEnclosed you’ll find fifty gold pieces. That’s a promise. If you give me information about Selos, I’ll give you another hundred. If you give me something I can use to destroy him, I may slip and add an extra zero.\nEnjoy brutishly killing things,'
    },
    {
      id: 'Ae-Da-2',
      conversation: 'Aenna/Davian',
      receiver: 'Davian',
      dateSent: new Date (730,4,24),
      dateReceived: new Date (730, 4, 29),
      nextLink: '/pages/Da-Ae-2.vue',
      prevLink: '/pages/Da-Ae-1.vue',
      tag: 'Aenna lies about Freir, asks for information, and dares Davian to follow up on his threats',
      text: 'Dearest Davian, \n I was thinking about you the other day. The streets were grimy from rain and all the worms were writhing and dying in the muck. I thought about how ridiculous they looked on the surface and how much they should have stayed underground. Those worms looked more at home on Falsk streets than you did. They at least had the good sense to die a few hours after they emerged. \n Thank you for kindly sending my money back. Since you were so unhelpful, I decided to do some good with it. I made a contribution to the concert hall on your behalf. I’m sure Skeigi will enjoy playing on a perfectly-tuned piano when he returns. I’ll make sure to tell him that you were the one who sent the money. The least I can do to repay you for our time together is to make sure he is well taken care of. \n I finally talked sense into some councilmen today and they signed off to lower the tariff on goods from underground. Don’t worry, the guards will still find and hang you if you take advantage of this treaty. I just thought I would let you know that your competition now has more of an advantage. I am really too kind to you. Any other person wouldn’t bother to warn you. \n Freir’s looking over my shoulder as I write. We are unbelievably happy. I am surprised I was able to pretend otherwise when you were here. That being said, you were not hard to fool. I hope the tunnels you travel through are more populated than your brain. \n I would be remiss if I did not ask again for information about Selos. If you don’t want money, there are other things I can pay you with. I have access to lots of information about trade underground. Do you want names? Travel routes? Name your price, I want Selos destroyed far more than I want to spite you. Selos is somewhat respectable in that he’s competent and, dare I say, menacing. You were as forgettable as the report on my desk this morning. I’ve never been so depressed about the human race than when I met you. \n Enjoy your tunnels and purple worms. I eagerly await your poisoned note, at least it would show some initiative. \n With love,'
    },
    {
      id: 'Ae-Da-3',
      conversation: 'Aenna/Davian',
      receiver: 'Davian',
      dateSent: new Date (730, 5, 24),
      dateReceived: new Date (730,5,29),
      nextLink: '/pages/Da-Ae-3.vue',
      prevLink: '/pages/Da-Ae-2.vue',
      tag: "Aenna responds to Davian's spores and puts up a bounty for whoever can bring back his head",
      text: 'Davian, \n I’d like to thank you for your wonderful gift. While uncomfortable, your spores let me miss a number of annoying events. I finally had time to finish some reports, and to use my own desk. Though I love Freir with all my heart, his desk is too small, and he doesn’t appreciate it when I pin things to his walls. He sometimes has trouble admitting that my job is more complicated and involved than his, and therefore requires any desk space at all. In his rare moments of idiocy, I think of you, who can make anyone look like a genius in comparison. \n I am so grateful for your gift, that I couldn’t help but return the favor. I offered a small reward to anyone who can bring back your head (separated from your body). I need something to feed Torin’s dogs. Don’t worry, it’s too small to attract any respectable hunters, but it will hopefully annoy you as much as you annoy me. If not, I can always raise the bounty. \n Also, the abyss is uncompelling, and I’ll therefore avoid rotting in it. After all, I actually do things with my life instead of hiding in underground tunnels. At the very least, I’m not afraid of the sun. Come to think of it, you are much closer to your ‘Abyss’ than I am. \n Affectionately yours,'
    },
    {
      id: 'Ae-Da-4',
      conversation: 'Aenna/Davian',
      receiver: 'Davian',
      dateSent: new Date (730, 6, 24),
      dateReceived: new Date (730, 6, 29),
      nextLink: '/pages/Da-Ae-4.vue',
      prevLink: '/pages/Da-Ae-3.vue',
      tag: "Aenna's savage reply that comes off as a bit desperate",
      text: 'Davian, \n Thank you for writing back. It must have been so difficult for you, seeing that you want to be rid of me. I feel honored to be one of the select few that you deign to think about, and I always strive to be worth your attention. To be compared to someone as respectable as Zephyra? That is just too much. Freir had to revive me from a fainting spell after I read those words. What would I do without your letters to keep me going? As you might expect, I would rather stab myself in the heart than lose your affections. You should see the walls of my room. They are plastered with your letters so I can better read them nightly. \n Feel free to kill all the messengers you want. I have more, and, as your body count goes up, I won’t need a bounty to convince people to hunt you down. Wait, I forgot, I obviously want you alive. I’ll be sure to cry when I leave your head out to rot. Thank you for the reminder. \n Tell Zephyra hi for me. I miss making a fool out of her. She was so delightful to make cry, though, from what I’ve heard, I can hardly beat your record. What does she see in you? Perhaps she loves the rotting stench you carry around with you everywhere, or maybe your pathetic attempt at intelligence. How could she not love your primitive excuse for a life? Don’t think that you are fooling her. She must feel sorry for you, or thinks she can change you. Enjoy the compassion — even if it comes from someone only marginally smarter than you. \n I have no gifts for you this time. This letter is all you get. I have a life to worry about, and the mud on my shoe is more important to me than our correspondence. Feel free to be rid of me forever, but if you decide to spite me by sharing some things that you know, you can trust that it will be the last thing you ever say. I hope you haven’t mistaken my toying with you as an actual show of my power. \n Sadly, I am out of time. Freir is taking me to a show tonight because he has money to spend on me. Remember all the things I paid for during your stay? I’m sure Zephyra enjoys taking care of you. You better hope she does, because nobody else will. You’re pathetic, and I’m sure Raven’s Port celebrates every time you return to your beloved tunnels. \n Sincerely,'
    },
    {
      id: 'Ae-Da-5',
      conversation: 'Aenna/Davian',
      receiver: 'Davian',
      dateSent: new Date (730, 7, 24),
      dateReceived: new Date (730, 7, 29),
      nextLink: '/pages/Da-Ae-5.vue',
      tag: 'Aenna pleads that Davian continue writing to her as a way to defend against Freir',
      text: 'Davian, \n I have pulled your bounty. If people are still after you, they come from someone else. \n This is the fifth draft of this letter. You may not be reading, which would make sense given you have no reason to read nor believe the words in this letter. Still, I do not have another place to turn. Perhaps you are right – I burned my bridges. Truth be told, a lot of my current situation came as a surprise, with little time to prepare. \n I promised you gold for information on Selos, but now I will offer you more for less. Keep sending letters. They can be empty for all I care, but at least send envelopes. Freir is still scared of you, and he is a little kinder when he sees one of your letters on the table. I know how pathetic this is, but I am low on options. I will pay you with gold, contracts, or names. If those are not appealing, I am sure I can be useful. Despite how it seems in this letter, I still have a wide range of influence, and am a good asset to have. \n You have no reason to believe any of this, but you are well outside Vothkar borders. There is nothing I can do with empty letters addressed to me from you. Especially because you never intend on coming back. This is an opportunity for you to make an easy profit, and, on the smallest chance that I am not lying to you, it would be a huge favor to me. \n Enjoy your travels,'
    }
    ],
    sig: '/assets/aenna-sig.png'
  }, // #endregion
  { // ANCHOR Davian #region[green]
    firstName: 'Davian',
    lastName: 'Bormul',
    letters: [{
      id: 'Da-Ae-1',
      conversation: 'Aenna/Davian',
      receiver: 'Aenna',
      dateSent: new Date (730, 4, 6),
      dateReceived: new Date (730, 4, 11),
      nextLink: '/pages/Ae-Da-1.vue',
      prevLink: '/pages/Da-Ae-1.vue',
      tag: "Davian's first reply, a rejection to supply information.",
      text: 'Aenna, \n You really think I&#8216;d stoop low enough to accept anything from you, especially after what you did? No amount of gold would convince me to help you with anything. Ever. Enclosed you&#8216;ll find your fifty gold pieces. Though forgive me if I didn&#8216;t seal the pouch tightly enough. You know how these lower class tradesmen are. They&#8216;ll steal anything they can get their hands on. You should probably send them to the gallows for it. \n I hope you rot in the Abyss,',
      ps: 'Also, escaped Falsk without incident? Really? You mean aside from being falsely accused of murder and almost hanged? Or maybe you forgot all about that in the midst of your overly-dramatic recovery while Freir fawned all over you. I hope he rots in the Abyss with you. You deserve each other. \n You know, you deserve much worse than that. Rotting in the Abyss would be too kind for you. I think I&#39d add in some purple worm poison, but just enough you&#39ll live for a month in utter agony. And let&#39s include starvation too while we&#39re at it. You sounded thrilled about bestowing that on Selos, so how about we throw it right back at you? Madness? What else can I add to the list? You deserve them all. Every single one. And I&#39ll let the world know what a murderous witch you really are. There&#39s that publicity you&#39re always talking about.'
    },
    {
      id: 'Da-Ae-2',
      conversation: 'Aenna/Davian',
      receiver: 'Aenna',
      dateSent: new Date (730, 5, 10),
      dateReceived: new Date (730, 5, 15),
      nextLink: 'pages/Ae-Da-3',
      prevLink: '/pages/Ae-Da-2',
      tag: 'Davian sends spores as revenge',
      text: ''
    },
    {
      id: 'Da-Ae-3',
      conversation: 'Aenna/Davian',
      receiver: 'Aenna',
      dateSent: new Date (730, 6, 8),
      dateReceived: new Date (730, 6, 13),
      nextLink: 'pages/Ae-Da-4',
      prevLink: '/pages/Ae-Da-3',
      tag: 'Davian alludes to a relationship with Zephyra',
      text: 'Uncultured Vixen, \n Your letter took a little longer to reach me this time. Unfortunately your servant or messenger was found dead in one of the tunnels. Couldn’t even get past his first Fivul Beast. I hope he was one of your favorites. Unlucky for me, a passing traveler picked up the letter after he raided the pockets of your servant and took all the gold I’m guessing you paid him. So the letter found me after all. I was really hoping I was rid of you for good. \n I’ve already taken down two of the hunters you sent my way. Don’t worry. Despite all your talk, I know you actually want me alive, and I’ll make sure I stay that way. Just for you. \n Zephyra sends her love for some reason. We’ve been seeing each other more since I’m frequently back in Raven’s Port. Lucky for me she is naively forgiving and has always been a much better kisser than you. \n Find someone else’s head for Torin’s dogs. Mine is actually useful attached, unlike Freir’s. Perhaps he’d be a better alternative for decapitation. \n Affectionately Yours,'
    },
    {
      id: 'Da-Ae-4',
      conversation: 'Aenna/Davian',
      receiver: 'Aenna',
      dateSent: new Date (730, 7, 14),
      dateReceived: new Date (730, 7, 19),
      nextLink: 'pages/Ae-Da-5',
      prevLink: '/pages/Ae-Da-4',
      tag: "Davian reacts to Aenna's more honest frustrations. Calls Aenna a flagitious noble",
      text: 'You are despicable, you know that? You think insulting every person you come across is going to get you wherever it is you want your pathetic life to go? I’m sorry it’s worked out so far for you. Maybe someday everything will crash down around you and you’ll realize you’ve burned every bridge ever built for your precious, spoiled feet to walk across. Zephyra may be an over-emotional idiot, but at least she cares about something besides herself. I’m not sure you’re capable of that. Your charade right before you had me framed for murder almost had me convinced, but you’re just another arrogant and flagitious noble, like the rest of them. \n I hope you and Freir enjoyed your show or whatever it was. You deserve each other. I hope you have a miserable life together.'
    },
    {
      id: 'Da-Ae-5',
      conversation: 'Aenna/Davian',
      receiver: 'Aenna',
      dateSent: new Date (730, 8, 2),
      dateReceived: new Date (730, 8, 7),
      nextLink: '/pages/Ae-Da-6',
      prevLink: '/pages/Ae-Da-5',
      tag: 'Not much of a letter, but at least he sent it.',
      text: 'You really expect me to trust that after what you did? And Freir is right to be scared.'
    },
    {
      id: 'Da-Ae-6',
      conversation: 'Aenna/Davian',
      receiver: 'Aenna',
      dateSent: new Date (730, 8, 16),
      dateReceived: new Date (730, 8, 21),
      nextLink: '/pages/Ae-Da-7',
      prevLink: '/pages/Da-Ae-5',
      tag: "Davian sends back Aenna's payment for his letter",
      text: '<i>Attached to gold pouch</i> \n \nDeceiptful She-devil, \nYou think I want your blood money? Get your precious messenger to write you letters. Maybe he actually cares. Or at least would pretend to for enough gold.'
    },
    {
      id: 'Da-Ae-7',
      conversation: 'Aenna/Davian',
      receiver: 'Aenna',
      dateSent: new Date (730, 8, 25),
      dateReceived: new Date (730, 8, 30),
      nextLink: '',
      prevLink: '',
      tag: "Davian is in Onnsel for a trade agreement, invites Aenna to see him kind of?",
      text: ''
    },
    {
      id: 'Da-Ze-1',
      conversation: 'Zephyra/Davian',
      receiver: 'Drotan',
      dateSent: new Date(730, 8, 17),
      dateReceived: new Date(730, 8, 22),
      nextLink: '',
      prevLink: '',
      tag: "To Zephyra: Aenna is a grown up and must live with her choices",
      text: '',
    },
    ],
    sig: '/assets/davian-sig.png'
  }, ////#endregion
  { // ANCHOR Drotan #region[cyan]
    firstName: 'Drotan',
    lastName: 'Brugir',
    letters: [
      {
        id: 'Dr-Ze-1',
        conversation: 'Zephyra/Drotan',
        receiver: 'Zephyra',
        dateSent: new Date (730, 6, 20),
        dateReceived: new Date (730, 6, 25),
        nextLink: '/pages/Ze-Dr-2',
        prevLink: '',
        tag: 'Drotan tells Zephyra to stop writing Skeigi',
        text: 'Zephyra, \n I appreciate your concern for my friend, but I can assure you that I am more than capable of keeping him healthy. I’ve known Skeigi longer than you have, and I know that, despite your actions, he will be okay. The irony of your letter Is not lost on me, and I hope you haven’t sent any responses to S’s. He does not need the extra distraction of a manipulative criminal to pull at him along with everything else that goes on in his head. \n You left Falsk, and, if anything you said to S. was real, you will keep your distance. I will pick up the pieces you left behind. \n Sincerely,'
      },
      {
        id: 'Dr-Ze-2',
        conversation: 'Zephyra/Drotan',
        receiver: 'Zephyra',
        dateSent: new Date (730, 7, 20),
        dateReceived: new Date (730, 7, 25),
        nextLink: '',
        prevLink: '/pages/Ze-Dr-1',
        tag: 'Drotan says Skeigi is doing well and that Zephyra needs to move on',
        text: 'Z. \n Skeigi is doing well. He is slowly becoming himself again, but, as you can hopefully imagine, he is still in pain. I assume you wrote to him before writing to me, and likely have continued, despite knowing it will only hurt him. I kindly ask you to stop. As you admitted, you need to move on, so please do.'
      },
      {
        id: 'Dr-Sk-1',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 3, 25),
        dateReceived: new Date (730, 3, 30),
        nextLink: '/pages/Dr-Sk-2',
        prevLink: '',
        tag: "Drotan asks Skeigi to invert Glomir and Elarith's twelfth",
        text: 'Skeigi, \n Get off the ground and stand up. My guess is you’ve been sitting there a few hours now without noticing. Get up. You have a concert tonight, and you need to get your head on straight. Remember the Glomir? If you don’t play it right, he’ll slip back into obscurity and nobody will hear his work again. \n You can’t afford to throw this concert away. You may hurt right now, but you can’t let it ruin everything you’ve worked for.\nSo here’s my challenge: Invert the Glomir and connect it to Elarith’s twelfth. Don’t change the key or time signature. Make it sound good. I’ll ask about it when you get back, and I’m interested to see what you come up with.'
      },
      {
        id: 'Dr-Sk-2',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 4, 5),
        dateReceived: new Date (730, 4, 10),
        nextLink: '/pages/Dr-Sk-1',
        prevLink: '/pages/Dr-Sk-3',
        tag: "Skeigi is in Onnur, Drotan tells Skeigi not to write Zephyra",
        text: 'Skeigi, \n Go eat something. You’ll feel better, I promise. You should be in Onnur by now, and I’ve heard the food there is better than Falsk’s. Get out of your apartment, put on a coat, and walk to the first place you see. Order the first thing on the menu. Then you can come back and wallow to your heart’s content. \n One of my dreams is to see Onnur’s concert hall, so you better do it justice. You may be hurting, but your music doesn’t stop. Play the concert. You’ll be more miserable if you stay home. \n I have it on good authority that there are three piano keys on the Onnur concert piano that are out of tune. You’ve probably already had the piano re-tuned, but I think you could find those three keys if you listen long enough. I’ll ask you about it when you get back. I’m doing a study on which piano keys are most likely out of tune at any given time. \n I shouldn’t need to say it, but don’t write Zephyra.'
      },
      {
        id: 'Dr-Sk-3',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 4, 12),
        dateReceived: new Date (730, 4, 17),
        nextLink: '/pages/Dr-Sk-2',
        prevLink: '/pages/Dr-Sk-4',
        tag: "Skeigi is getting back to practicing",
        text: 'Skeigi, \n Are you practicing again, yet? Your craft depends on it. You told me a long time about how lack of practice leads to hyperextending your fingers. We wouldn’t want that. Sit at the piano bench, put your hands on the keys, and play. Don’t play whatever is in your head yet. You know it will send you off somewhere and you’ll be late for rehearsal. Play what you have to play tonight. Make sure you still have it memorized. Hopefully, you’re bored by now. Remember the inverted Glomir from a few weeks ago? You won’t know how it actually sounds until you play it. \n I can tell from here you aren’t happy with the piece. Play it until you are. \n Don’t write Zephyra.'
      },
      {
        id: 'Dr-Sk-4',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 4, 21),
        dateReceived: new Date (730, 4, 26),
        nextLink: '/pages/Dr-Sk-3',
        prevLink: '/pages/Dr-Sk-5',
        tag: "Skeigi is in Tonskal, Vuden is gaining popularity in Falsk",
        text: 'Skeigi, \n What do you need to do to prepare for rehearsal today? Do you have the music you need? Even if you have it memorized, bring the sheet music. You’re forgetful right now, and you don’t want to embarrass yourself. \n Do you know the conductor’s name? You should be in Tonskal, and I’ve heard there is a new guest conductor. Are they any good? How is their rebound off the downbeat? You only solo now, but some of us still have to watch for the beat. How much has the tempo drifted from the beginning and end of the Elarith? \n Think you can send back some sheet music of your Glomir-Elarith? Vuden is trying to convince people he’s worth their time, so I want to give him something legitimately difficult to play. It still has to sound good, though. You know Vuden – he’ll always find something to whine about.'
      },
      {
        id: 'Dr-Sk-5',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 4, 30),
        dateReceived: new Date (730, 5, 4),
        nextLink: '/pages/Dr-Sk-4',
        prevLink: '/pages/Dr-Sk-6',
        tag: "Drotan asks Skeigi to distract himself from Zephyra. Skeigi is back to practicing in earnest",
        text: 'Skeigi, \n My guess is that you are back to practicing in earnest…which means I have to continue to remind you to eat and walk around occasionally. So you have your set memorized again, what’s next? You’ll have some time in Falsk to get together your next set, but I hope you have ideas now. \n Keep working. You’ll be hurting for a while. It won’t go away, so you have to push through it. At this point, Zephyra will only push you backwards. Practice until you stop thinking about her. I know you are perfectly capable of distracting yourself, so feel free. Just make sure to come back. You have a career to focus on, and you have yet to fully prove yourself in Falsk. Don’t let her break down everything you’ve built in the past few years.'
      },
      {
        id: 'Dr-Sk-6',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 5, 11),
        dateReceived: new Date (730, 5, 16),
        nextLink: '/pages/Dr-Sk-7',
        prevLink: '/pages/Dr-Sk-5',
        tag: "Drotan gives notes on Skeigi's composition",
        text: 'Skeigi, \n Vuden had no chance at your inversion, but he isn’t convinced you’ll be able to play your work when you return to Falsk, so practice up. It’s a good piece, but I have a few notes. I’d like to see how they sound when put into practice. I’m sure you can find time between rehearsals and performances. Count it as practice—composing is good for you. It always has been. \n 1. The first eight measures don’t adequately introduce the piece. It seems like you didn’t quite know where you were going when you wrote them. I like the run of fourths. Vuden was not happy when he saw it. \n 2. The second repetition of the melody: I’ve heard you play Glomir too many times to count. You tried to sneak in a change to the inverted line. That’s cheating. \n 3. The interlude is boring. You’re writing for career musicians, not a public audience. You don’t need to hold off on the dissonance. \n 4. The ending is as weak as the beginning. Fix one and you’ll fix the other. \n It’s a solid piece, but I know there’s more in you.'
      },
      {
        id: 'Dr-Sk-7',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 5, 18),
        dateReceived: new Date (730, 5, 23),
        nextLink: '/pages/Dr-Sk-8',
        prevLink: '/pages/Dr-Sk-6',
        tag: "Skeigi is in Losaborg for the parade of lights, he must teach a bassist who learned throug the Sadferd method",
        text: 'Skeigi, \n I got a letter yesterday about your itinerary changing. I’ve been to Losaborg once, but you’ll be there for the Parade of Lights. I know you don’t want to go, but you should. I’ll make you a deal. You go to the parade for an hour, and I’ll let you give me a piano lesson. We’ll be equally miserable. \n When you finish the Glomir-Elarith, I have another challenge. You’re too much of a philosophical musician, so finding mind-benders for you is difficult. We’re getting a new bassist, but he comes from the Sadferd method. As you can assume, he’s a disaster. How do I translate what we do, so he actually understands it? You may be an abysmal writer, but your ideas are always good. I can translate whatever you write, so get back to me quickly. \n Hopefully I don’t need to remind you that you should not write to Zephyra.'
      },
      {
        id: 'Dr-Sk-8',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 5, 25),
        dateReceived: new Date (730, 5, 30),
        nextLink: '/pages/Dr-Sk-9',
        prevLink: '/pages/Dr-Sk-7',
        tag: "Drotan praises the Glomir-Elarith and complains about Vuden",
        text: 'Skeigi, \n Get a haircut. You undoubtably need it. \n The changes to the Glomir-Elareth are brilliant. Even Vuden had to admit it. He says you cheated with your new interlude. We all know you’re the only one who can play that. However, the ending was what made Vuden especially angry. I don’t know how you could possibly have found out he sprained his left pinky a couple weeks ago. It’s still a bit stiff, but he could blame the injury for his terrible playing. \n You’re almost back to Littenby, but don’t slow down. You’ve faced worse than this and come out the other side. Keep going and keep working. I promise, it’s for your own good.'
      },
      {
        id: 'Dr-Sk-9',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 6, 1),
        dateReceived: new Date (730, 6, 6),
        nextLink: '/pages/Dr-Sk-10',
        prevLink: '/pages/Dr-Sk-8',
        tag: "Skeigi gets a new practice challenge from Vuden, Moki, and Aogi",
        text: 'Skeigi, \n I’ve written a chord progression at the bottom of this page. I offer it, free of charge, for you to use in your technique work today so you don’t get bored. I know you like finger exercises about as much as your students, so maybe this will help. I’ve also had Vuden, Moki, and Aogi piece together the most difficult exercise they can come up with. Vuden was especially excited to join the project. \n Here’s the rule: you can only practice it for up to a half hour per day. We’ve started a betting pool to see if you can get it down by the time you get back. Don’t let me lose. I think they talked for an hour about your weaknesses, so this may even challenge you.'
      },
      {
        id: 'Dr-Sk-11',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 6, 7),
        dateReceived: new Date (730, 6, 12),
        nextLink: '/pages/Dr-Sk-12',
        prevLink: '/pages/Dr-Sk-10',
        tag: "Skeigi is asked to give notes on Olderth's symphony",
        text: 'Skeigi, \n Have you found a bookstore yet? I need something new on clarinet technique. I’m out of ideas for one of my students, and I need to stay up to date on modern technical playing. You and I both know that Falsk is not the place to look for something like that. \n The bassist is passable now. He finally understands the concept of playing behind the beat, and what ‘the pocket’ is. I don’t know how you made those comparisons, but he seemed to get it. \n I can’t let you relax. You have work to do, and I know you’re still thinking about her. Olderth just finished his latest symphony, and wants to know what you think. He’s about to publish, so he needs your notes back in the next week. This is a big opportunity for you to get more credibility. You may be ‘nobility,’ but you’re still only 24, and people will have a hard time respecting you if you don’t definitively prove them wrong. Show off your composer chops so you can be noticed in that field as well. \n Despite who he ended up being, Freir kept your career alive. Don’t flounder now that he’s (rightfully) gone.'
      },
      {
        id: 'Dr-Sk-12',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 6, 14),
        dateReceived: new Date (730, 6, 19),
        nextLink: '/pages/Dr-Sk-13',
        prevLink: '/pages/Dr-Sk-11',
        tag: "Skeigi needs to think about his career now that Freir is gone",
        text: 'Skeigi, \n Only a couple days until Littenby. You’ve made it this far and I’m sure you’re looking forward to a few nights without performing. They are well-deserved. \n Olderth read over your notes. He didn’t like everything, but you did well-enough. People know you are a consultant now, and maybe you’ll get a few more requests. I’m just trying to get you to think about this stuff. Freir won’t handle it for you, and you could use the challenge. You can do this, but you need to put in the effort. \n Vuden is so cocky about the technique exercise he sent you. Don’t let me down.'
      },
      {
        id: 'Dr-Sk-13',
        conversation: 'Drotan/Skeigi',
        receiver: 'Skeigi',
        dateSent: new Date (730, 6, 20),
        dateReceived: new Date (730, 6, 25),
        nextLink: '',
        prevLink: '/pages/Dr-Sk-12',
        tag: "Skeigi sends back the technique excersize as a composition",
        text: 'Skeigi, \n I wasn’t going to write you as often now that you’re back in Littenby, but Moki told me about what you sent to Vuden. He was so proud of how complicated and unintuitive the technique exercise was, and we’re all stumped on how you managed to write something that sounded palatable from it. He can’t play it to speed, so we’ll have to wait for you to come back. \n Seems like things are going better. Keep working.'
      },
    ],
    sig: '/assets/drotan-sig.png'
  }, ////#endregion
  { // ANCHOR Niera #region[orange]
    firstName: 'Niera',
    lastName: 'Ostodar',
    letters: [{
      id: 'Ni-Ze-1',
      conversation: 'Zephyra/Niera',
      receiver: 'Zephyra',
      dateSent: new Date (730, 3, 15),
      dateReceived: new Date (730, 3, 20),
      nextLink: '/pages/Ze-Ni-1.vue',
      prevLink: '',
      tag: 'Niera believes Aenna framed Zephyra',
      text: "Dear Zephyra, \n I hope this letter finds you. I checked every book I can and haven't found any mention of Ravens Port. Sura insists that she knows where it is, but… I guess if I get a letter back I'll know for sure. I'll also know never to play any sort of geography game against Sura. It's best to avoid playing Sura in any sort of trivia game, but you don't have to worry about that. \n I wanted to thank you and apologize. Sura said you spent a lot of time with me while you were here, and I'm sorry I was rude. I'm not usually so… mean. I'm sure you heard the story behind it all, and I'd rather not write it out. \n I also wanted to thank you for being kind to me. You had no reason to be, and you could have easily taken advantage of the situation. You are definitely kinder than I will ever be. \n My guess is that Aenna forced you to leave somehow. She is the cause of everything horrible, and the things people are saying about you and Davian are pretty horrible. I struggle to believe you came to Falsk on an assassination contract. Framing you seems like something Aenna would do. Probably another diabolical plot designed to ruin every life except her own. Sura didn't say I was wrong when I brought it up, which is essentially an affirmation. It's probably good you got away. Aenna is as evil as they come. She belongs with all the monsters you taken down. I hope someone else outsmarts her someday and she can get what she deserves. Not sure if there's a punishment big enough for her at this point. Hanging would be too kind. \n I hope you return to Ravens Port, and that this letter gets there as well. I guess you could be anywhere, but I didn't want to wait on sending you a letter – writing is a nice distraction from my own misery. \n Sjáumst,"
    },
    {
      id: 'Ni-Ze-2',
      conversation: 'Zephyra/Niera',
      receiver: 'Zephyra',
      dateSent: new Date (730, 4, 22),
      dateReceived: new Date (730, 4, 27),
      nextLink: '/pages/Ze-Ni-2.vue',
      prevLink: '/pages/Ze-Ni-1.vue',
      tag: 'Niera is getting better, but does not like living with Sura',
      text: 'Dear Zephyra, \n I’m glad my letter made it. Even if it was addressed to the right place, I wasn’t sure it would actually make the entire journey. Hopefully, it was still sealed. As soon as I sent it out, I realized I probably should have been a bit more careful, and then I decided my reputation couldn’t get any worse, so it was fine. My secret isn’t out completely (I guess Aenna is still “saving” me from the publicity), but Sura says there are rumors, so that’s pretty much the end of me. \n Ottilie is technically my first name, and my mother’s middle name, but I started going by Niera after she died. It was when I was really young, so don’t feel bad. I remember she had dark hair, but that’s about it, and that might just be because I’ve seen pictures. \n Sura told me a long time ago that I still had to sign Ottilie on official documents, but I’m pretty sure that’s bull. It was the signature I practiced, though, and signatures are kind of a big deal here. \n It was the ancient seer Isilmara who said that a name holds a shadow of a soul. There’s a number of different translations on that one, but they’re all wrong. I don’t know how things are in Ravens Port, but I’ve about decided that all of Vothkar has been cursed with terrible historians. I know it’s irrational (which shouldn’t be surprising coming from me), but I still haven’t forgiven my mother for dying and leaving me with Aenna. I know she didn’t have a choice, but…as I said: irrational. Every time I sign my name, I try to think better of her. So far, it hasn’t worked. \n You made the papers for about a week, but I think the guard ran out of things to accuse you of. It got funny by the end. Davian ended up the leader of an underground crime ring, and you were a jewel thief, among other things. I know how these things go. Despite what people like to say, newspapers are for entertainment purposes only, and it wasn’t hard to see that the media was lying about you. However, if you were somehow a part of Aenna getting her throat slit, you should have finished the job. It would have saved Falsk a lot of trouble. Plus, it feels right that she would be murdered. It’s appropriately dramatic. \n Sorry. I should probably try to be nicer, but it’s hard when your sister is a literal demon. You met her, so you understand. \n You’re glad you left when you did. I may have been annoying before, but at least you could leave the room. Now I’m a walking monster ready to strike. It’s taken me four sittings to get this far in the letter because I can’t sit still, or I freak out. It’s the tiniest stuff: I once yelled at Sura for twenty minutes because she put flowers in my room without asking. I don’t know why she puts up with me. I wish I was better, and I really try to be nice, but it’s hard. The whole drug thing started because it was the only way to calm down and stay calm for long periods of time. I can admit now that it got out of hand, but my motives were pure. Now I don’t have anything. \n I still live at Sura’s house. She doesn’t trust me, but somehow hasn’t lost all patience with my…episodes. We don’t talk much anymore. She’s at work most of the day, so it took me a while to notice the silence. I don’t know how she lives in her house. It’s cramped and all the furniture is too nice. I feel bad sitting on the couch, and I don’t dare eat in my room in case I spill and ruin something expensive. You never saw my house, but I think you would’ve liked it. You never have to worry about breaking anything, because everything is already half-broken. Sura calls my living room the furniture graveyard, but I love it. There aren’t as many stairs, either, which is an added benefit, and everything is more spacious. I may hate being alone, but I enjoy having my own space without Sura constantly looking over my shoulder. \n I’ve been going to work again, which is nice. I hate work, but it’s better than doing nothing…at least, that’s what I thought it would be. A lot of my job is boring tables, charts and general pencil pushing, but every month I get to visit the guard and log estimates for how much things are worth. Sura could no-doubt tell you the importance of this activity, but I don’t care. It took a couple years, but I finally got the guard to stop treating me like someone important. We hang out for a week, I write some random numbers on the form I’m supposed to fill out, and then I have to wait another month before I can do it again. Lots of them shamelessly flirt with me, which I don’t mind, and I’ve convinced the captains to switch off giving me sword-fighting lessons. Before you think I’m any good, I’ll inform you that I can hold a rapier correctly, and that’s about it. \n This week has been one terrible day after the other. Idin is there. I must have not recognized him before, but now he seems to be everywhere, and I think he’s the one teaching me rapier tomorrow. Maybe I can move. Littenby isn’t far away. I could probably start a new life there. \n I realize now you may not know who Idin is, and I feel bad for mentioning him. He’s a guard…captain, I assume. I haven’t had a good look at his uniform because I walk away as quickly as I can whenever I see him. He’s the one that found me and kept me alive on that day you and I met. I’m grateful, but that doesn’t mean I want to see him. He knows too much about me, he could arrest me at any time, and it’s weird. I’m not sure if seeing him at work is any worse than seeing him at home, though. He’s come by a couple times, and we sometimes talk. I don’t know what he wants from me, but I’ve already thanked him a thousand times, so I think I’ve fulfilled my social duty. \n That’s all, so YOU have to tell me everything now. Is there an actual Rosemund? Is Davian finally gone for good? Did you fight any magical creatures along the way? Do dragons actually exist? \n sjáumst,'
    },
    {
      id: 'Ni-Ze-3',
      conversation: 'Zephyra/Niera',
      receiver: 'Zephyra',
      dateSent: new Date (730, 5, 16),
      dateReceived: new Date (730, 5, 21),
      nextLink: '/pages/Ze-Ni-3.vue',
      prevLink: '/pages/Ze-Ni-2.vue',
      tag: 'Niera meets Aalder and expounds upon her relationship failures',
      text: 'Dear Zephyra, \n I was heartbroken to read your last letter. Heartbroken! I don’t know how magic works, but I assume it’s well within the realm of possibility to be able to see the future, or, a future? I’m glad I got to be there, even if they were only visions. It gives me hope. So, thanks for that. \n But the memories. That must be torture. I can’t imagine how miserable that must be, but I think you made the right choice. I hope so. I wish you could be happier about it. Life can sometimes be so… cruel. Maybe, with time, it will get better? That’s what Sura tells me, and she is usually right. \n I keep having to remember that you don’t know me that well. I always assume you know all the craziness that is my life, but then I realize I should probably explain it to you. This is my long way of saying that I might understand a tiny bit of what you’re feeling. This might not be what you want to read right now, so I don’t blame you at all if you don’t. Some people like to be alone in their pain, so I don’t want to intrude. \n I think in my last letter I told you what a horrible person I am. It’s not just that, though. Maybe it’s all caused by the same thing, but I also have the horrible talent of falling in love too soon. I have found my Skeigi a countless number of times, except they all end up being self-absorbed jerks. I loved them, though. I would have married each and every one of them. Maybe I’ve read too many books, but I feel those stereotypical things every time — my heart gets ripped out, the world loses its color, all of that sappy stuff. I make fun of it now, but I think that’s only because I’ve been single for over a month now. I don’t think that’s happened since I was 15. \n It usually goes as follows: \n 1. Sura (usually just Aenna’s messenger) tells me I have to distract someone, or convince someone of something, or really have any benign interaction with a man. \n 2. This man always ends up being ridiculously handsome. I don’t know why Sura never asks me to talk to ugly people. I always end up having to fake-flirt with drop dead gorgeous men. Although, I was looking through pictures while writing this letter, and maybe I was just drunk. \n 3. I flirt, he flirts, and I start to believe he actually likes me. This takes around five minutes. All they have to do is smile and say my name and I’m gone. This is not something I’m proud of, but I’ve had to come to terms with it. \n 4. I may be a 3rd child, but I still have money and an important last name. It’s not hard to convince people to date me. Half the time, they just want to use me for something or steal my money. I don’t think anyone has sincerely liked me. \n 5. By the next morning, I’m seriously in love. If Sura hadn’t scared them all away, then I would have gotten married at 16 ½, or any month after that. I would have died for several men after only a couple days of knowing them. I almost have. \n 6. I’m so far gone, there’s nothing Sura can do. She’s probably wanted to strangle me several hundred times, and she’s probably had to stop Aenna from doing so at least several times. It takes anywhere from two weeks to a month for the new love of my life to dump me. I am not a nice person to be around, and it doesn’t take long for people to see that my craziness is not an act. I don’t blame them for running. \n 7. I decide that life has lost all meaning. When it happens, I’m only a little better than how I was when you met me. Usually, though, I lock myself in my house and nobody else has to deal with it. Now that I write it, I see that it was stupid of me to imply that I know how you feel. You have something real. I never did, but at the time, I felt that each of those men were my other half. I never had magic visions, but I certainly made my own. \n I wish I could help you instead of writing a useless letter that probably only made you feel worse. I hope things get better for you. Maybe Rosamund and Berg know how to help you heal. I wish I could give you news about Skeigi, but I don’t think I’ve ever seen him except on his posters. Those kinds of concerts have never been my thing. Maybe it’s the sitting down for two hours straight. I’m not patient enough to count the swords in the barracks, so there’s no way I could make it through a Skeigi concert. I’ll keep my ears open, but you should probably find another source of information about him. \n I’ve almost thrown this letter away so many times, so I’ll write a funny story so I can convince myself you won’t hate it. \n Remember Idin from last letter? He is not terrible. He definitely could have been a lot worse while I was at the barracks, but he still annoyingly casual with me. This story is not about him, but about his friend. \n Aalder joined the guard around two months ago. He’s probably the best person in the whole organization. He’s hilarious, but in an adorable, overly dramatic sort of way. Lest you are already getting worried, I am not dating him, but mostly because he hasn’t asked me… and he never will because I’m way out of his league. I kind of wish I wasn’t. \n The last day I was there before I had to go back to the office, the whole place was in complete chaos. I stole my way through the front office because I could hear things going on. In the middle of the main sparring ring was a huge peacock. I don’t know how he got a hold of it, but Aalder somehow smuggled it in, and let it loose without anyone catching him. \n Everyone knew he had done it. Nobody else would have. She must have planned it for when I was there so that I could make sure he didn’t get fired. I included a feather with this letter as proof. \n We could hardly get anything done the entire day. Even after they wrangled the bird, they didn’t have anywhere to put it. They couldn’t let it loose on the streets – it had to belong to somebody. I don’t know what they ended up doing with it. I was a little distracted because Aalder found me laughing and confessed to the whole thing. I think he told me how he did it, but I had to focus on not kissing him. He is so amazing, and I wish you could meet him, but you can’t write Sura about any of this. She will keep me from leaving this house forever, and I’ll die a slow and horrible death as I suffocate in her tiny rooms. \n Seriously, Aalder is different than all the other ones. We genuinely like each other, which is helped by the fact that he is practically perfect. We will never happen, though. I’m rich, and he’s not, and he’ll never have the courage to ask me out. I’ll just have to deal with it. \n That’s my funny story, and I hope it makes things better for a little while. Hang in there. \n Wish I could help more,'
    },
    {
      id: 'Ni-Ze-4',
      conversation: 'Zephyra/Niera',
      receiver: 'Zephyra',
      dateSent: new Date (730, 6, 22),
      dateReceived: new Date (730, 6, 27),
      nextLink: '/pages/Ze-Ni-4.vue',
      prevLink: '/pages/Ze-Ni-3.vue',
      tag: "Niera has begun dating Aalder",
      text: 'Zephyra, \n If I have learned anything over the past few weeks, it is that love finds a way. All the stories are true—the princess eventually gets the prince. True love wins and all of that blather. If it can happen to me, it can happen to you. Maybe Skeigi is just preparing you for someone even better. And that someone will be everything you’ve ever dreamed of. He’s out there. I know he is, and you’ll find him. \n My last letter was a little depressing, but things have turned around now, and I think I’m the happiest I’ve ever been. I’m back in my own house, Aenna is almost completely out of my life and is definitely miserable (no matter how she pretends to act), and I am finally, truly, and deeply in love. \n Aalder is the most perfect human to ever exist. The picture I sent should speak for itself, but he’s so much more than infinitely attractive. I’ve been reading through my library again (things get foggy eventually if I don’t brush up), and I can’t find a single poem, story, or drama, to do him justice. I’ve been trying to write something for him, but I can’t to any better. \n It’s only been a few weeks, but I know that we’re meant to be. Everyone else pales in comparison, and I honestly don’t think I could like anyone else now that I’ve met him. I wish you were here. You would understand. I can’t tell anyone else because of how scandalous it is—but money and social status won’t keep us apart. We’re perfect for each other, and it must be fate that we found each other when we did. \n Everything really started happening earlier this week and things have gone so fast since then that I’ve only now had a chance to sit down and write you. I went back to the guardhouse to do the monthly audit, which I’ve been waiting for since the day I left last time. I knew there was something between us even then, but I couldn’t do anything about it. After all, the girl never makes the first move, even though I desperately wanted to. I didn’t want to hurt his pride, but I also wasn’t sure I could take the rejection. I knew I didn’t deserve him, but I still hoped that he felt as I did. \n I show up the first day, and I knew something amazing was going to happen. The excitement was already making me a little sick, but I felt like fate tapped me on the shoulder, just as she did Isaril before he met his true love in the belly of the giant bird, and pointed me forward. \n It started normal. Lots of checking records and pretending to count things. One of the perks of being nobility is they basically can’t fire you unless you’re doing something actually important. I make it a personal goal to never do anything important enough that I could get consequences for doing it poorly. I’m like Anawynd controlling the waves…before she was eaten by the ten-tailed shark. \n Aalder entered the room at some point, and I almost died. I tried to be normal, but I must have been incredibly awkward. How could you be normal when Aalder is around? I think it’s impossible. He’s too wonderful. I think he told the guard captain that he was supposed to show me around for the rest of the day, and I tried to tell myself it was just normal protocol. I almost suffocated because I could hardly breathe when he was so close. \n Once the captain left, Aalder pretended everything was normal, and that he wasn’t the equivalent of Lomor in the seven heavens of Wundel. Then he said he wanted to check my numbers, and I once again tried not to die as he came and looked over my shoulder at what I was writing. I must have been shaking, because I could hardly stay standing. I was too scared to look at him, but when I finally mustered the courage, I saw he wasn’t looking at what I’d written at all. He was looking at me, probably just waiting for me to come to my senses. His face was inches from mine and I literally could have died, my heart was beating so fast, but then he was kissing me, and everything felt right. \n I know why I went through everything horrible over the past months. It was so I could meet him, and so we could be together. Before, I was too drugged up to notice someone so perfect, but now I’m clean and sober and I can finally see how my life is supposed to be. I’m meant to be with him, and he’s meant to be with me, and our life will be absolutely perfect. \n If Sura found out, she would somehow ruin everything. She’ll never understand. She’s too logical and boring to realize that magic exists. She’s like Sil-Gand before his run across the great desert. I know you’ll understand me. You live in a world where magic exists and the impossible is possible. I’d wish I was there with you, but Aalder’s here, and I’ll never leave him. \n To be clear, we aren’t dating. Dating involves going places and fancy dinners and the big charade. Aalder and I don’t need that. I come in the morning for the audit, and he somehow sneaks out of whatever training or exercises he’s supposed to be doing, and we find somewhere we can be alone and…I probably shouldn’t go into too much detail. \n Zephyra, I’m in love, and it’s wonderful, and I wish you could be happy too. I wish I could send happiness in this letter, even if it was just a little. I guess we sometimes just have to wait, but fate will come to you too. Maybe she just hasn’t found you yet. I’m rooting for you. Maybe Aalder and I can come visit you sometime in Ravens Port. I know it’s not much to look forward to, but I don’t know how else to help. \n I included a short story of Isaril and Fate. It’s not much, but I always find it comforting when I’m down. I’ve read it so many times that I’ll never forget it, so I hope it can help you like it helped me. \n Sjaumst,'
        },
        {
          id: 'Ni-Ze-5',
          conversation: 'Zephyra/Niera',
          receiver: 'Zephyra',
          dateSent: new Date (730, 7, 14),
          dateReceived: new Date (730, 7, 19),
          nextLink: '',
          prevLink: '',
          tag: "Niera's angst after being dumped by Aalder",
          text: ''
            },
            {
              id: 'Ni-Ze-6',
              conversation: 'Zephyra/Niera',
              receiver: 'Zephyra',
              dateSent: new Date (730, 8, 10),
              dateReceived: new Date (730, 8, 15),
              nextLink: '',
              prevLink: '',
              tag: "Niera is okay though Idin won't look at her. Tentative friends with Vurmira",
              text: ''
                },
                {
                  id: 'Ni-Ra-1',
                  conversation: 'Ravvi/Niera',
                  receiver: 'Ravvi',
                  dateSent: new Date (730, 8, 16),
                  dateReceived: new Date (730, 8, 21),
                  nextLink: '',
                  prevLink: '',
                  tag: "Niera sends story of third-eye prince and a bunch of questions",
                  text: ''
                    }
    ],
    sig: '/assets/niera-sig.png'
  }, // //#endregion
{ // ANCHOR Sura #region[purple]
firstName: 'Sura',
lastName: 'Ostodar',
letters: [
  {
    id: 'Su-Ze-1',
    conversation: 'Sura/Zephyra',
    receiver: 'Zephyra',
    dateSent: new Date(730, 4, 16),
    dateReceived: new Date(730, 4, 21),
    nextLink: '/pages/Ze-Su-2',
    prevLink: '/pages/Ze-Su-1',
    tag: "Niera is getting better, and Sura sends Zephyra a dress",
    text: 'Rosamund, \n Thank you for the letter. It came at a good time. Your friend is very welcome. She did a lot for me as well, though I wasn’t able to show my gratitude. I hope she is happy back in Ravens Port. We didn’t know each other very long, but I still miss her. \n The tea tastes exquisite. I forgot that tea could actually taste good—I’m more a utilitarian consumer. Aenna and I sometimes go tasting, but she’s always busy now. I would say she’s happy in her work, but I doubt it. \n Your friend would probably like to know that Niera is doing a little better. She’s been to work a few times now, and comes home angry and stressed. I’m starting to wonder if every bit of happiness she’s ever had was because she was high or drunk. Her friends have abandoned her, and she’s not taking it well. \n Rosemund, tell your friend not to worry. I’m taking care of Niera and the rest of them. I shouldn’t complain. Things are not as bad as I make them seem. It’s just been a long day. \n Thank you for the letter and please, keep writing. I worry about your friend, and I like to know she’s okay. \n You sent me tea, so I sent a gift in return. I hope you have good seamstresses in Ravens Port. I don’t think a crafted dress would make the trip, but the fabric and pattern should be enough. I know how much your friend enjoyed raiding my closet, and I had a designer make the dress pattern customized to her. \n Until our next correspondence,'
  },
  {
    id: 'Su-Ze-2',
    conversation: 'Sura/Zephyra',
    receiver: 'Zephyra',
    dateSent: new Date(730, 5, 13),
    dateReceived: new Date(730, 5, 18),
    nextLink: '/pages/Ze-Su-3',
    prevLink: '/pages/Ze-Su-2',
    tag: "Freir and work takes Aenna's time, Torin is becoming the most well-loved in Falsk while Sura wishes for a day at the estate",
    text: 'Dear Elia, \n Though I adore your friend Rosamund, and I am thankful to her for mediating our correspondence, I think it will be clearer for both of us if I address you directly. I am fairly certain I have found a method of sending letters that will keep them from being opened prematurely, so I do not see the need for the extra precaution. \n Thank you for writing. As with your last letter, it came at a good time. It may be selfish, but I appreciate your excitement for the dress. At least something this month has gone as intended. Along those lines, your tea was lovely. I don’t think I’ve ever tasted those flavors before in that combination. I hope it is okay that I sent some to Aenna. I don’t know if she will get it, but she needs a moment of happiness more than I do. She is difficult to catch these days. I visited her once at work, but she is a truly terrifying dictator over her team. Beyond that, I don’t see her except for events, but then she is Freir’s, and there is no use trying to talk to her. I miss our weekly lunches, and she could help with everything going on – at least with advice. She’s too smart for her own good. Maybe we all are. \n Niera has been getting enough letters, and I am sure she can tell you about the new events in her life. As always, she is full of stories. Sadly, a lot of them are true. I don’t know how much longer I can keep track of her here. I wish I were more patient, but she is pushing me to my limit. If we both want an amicable relationship going forward, she will have to move out soon. I need quiet while working, and I don’t think I have heard silence since she first came here. I love her, but I have more than her to worry about now. \n Torin and Vurmira. They are doing well, I think. They seem to be enjoying themselves. I don’t know how much you know about them, but they have an alliance, though Torin wants to marry her. Vurmira is the only person with enough status to be a challenge. Rather, her father is the only person who can stand confidently against ours. Councilman Heild is an interesting man. Torin has told me small details, and he seems as manipulative as his reputation. \n I don’t know why I keep thinking life will calm down. Once Niera got healthy, I planned a day at the estate, walking the gardens – with Aenna, if she were able to get out. It’s not much of an adventure by your terms, but I need something. Aenna somehow has an infinite tolerance for difficulty, but I can only take so much, and Niera has sapped a lot of my patience. \n However, life has not slowed down. Torin wants to marry Vurmira, and he’s bringing as much publicity to it as he can. I think he’s crafted a romance for them so he can capture the heart of every person in Falsk. I think he’s hoping to pressure the Councilman into agreeing to the marriage. Whatever his plan is, he’s passed a lot of the estate’s finances to me. We don’t make this a public fact, but Aenna actually worked with our father on keeping the estate, and so much of the notes I’m sifting through are hers. Luckily, I know her shorthand – apparently better than Torin does. \n Vurmira is the sweetheart of the nobility now. Regardless of his antics, Torin has done an excellent job helping her image along with his own. If he keeps it up, Councilman Heild would be a fool to reject a marriage proposal. If I can keep Niera from ruining things, and if Aenna can help orchestrate, I think Torin’s plan may work. \n I have to leave soon. I have a consulting meeting across the city in an hour. A hospital is trying to get a trade contract for some medicines it has to import from Leknig. Apparently, the mediators asked directly for my employer – which essentially means they wanted me. Not that they would ever say so. I’ll stop writing before I write something I shouldn’t. \n I did not have time for something complex, but I sent you some flower seeds. I hope they are able to grow in Ravens Port, and that they are not lost on the journey there. I know you are hurting, and any flowers would die along the way. You might not be a flower person, but these are my favorite, so maybe they can remind you that I hope you can be happy. \n With a smile,'
  },
  {
    id: 'Su-Ze-3',
    conversation: 'Sura/Zephyra',
    receiver: 'Zephyra',
    dateSent: new Date(730, 6, 14),
    dateReceived: new Date(730, 6, 19),
    nextLink: '/pages/Ze-Su-2',
    prevLink: '/pages/Ze-Su-1',
    tag: "Sura struggles watching Niera while crumbling under work. Aenna is suffering with Freir",
    text: 'Elia, \n I find myself looking forward to your letters. I usually hate sorting through my mail, but now I am almost eager. The vase is beautiful. I put it up in the guest bedroom now that Niera is not there to break it. I enjoy seeing the differences between Falsk and Raven’s Port. It is easy for me to feel that my city is the entire world, and I enjoy knowing there is more beyond the walls. Your world must feel so big after all of your travels. I am amazed you can make sense of it all. Falsk is already too complicated for me. \n Niera has moved out. The house is quiet enough I can get my work done quickly and without distraction. It also means I can ask my servants back. Not having to cook and clean has freed up a lot of my time and, in rare moments, things seem to be working smoothly. I still worry about Niera. I honestly don’t know if she’s ready to take care of herself again, or if she ever will be. However, I cannot watch her forever, though I am not sure that will assuage my guilt if she gets into trouble. I wish I knew what she was going through. I hesitate to say something is wrong with her, but something definitely is not right. She blames everything on Aenna, but we were all trying our best. Perhaps it is my fault for not seeing it sooner and separating them earlier. Nothing can be done now, but I will always feel guilty for not being even a little better. I wish I could give you details, but some secrets should never be told. \n I never had my day at the estate. There are too many things to do, and ignoring even one could be disastrous. With the warmer weather, more caravans are leaving, which means more documentation and contracts for me. I enjoy the work as much as someone could enjoy something so monotonous, but there is a lot of it. Even if I worked every hour of the day, I still could not get everything done. Then there is the estate. My father is too ill to do more than his councilman duties, and so I finally left a note at Aenna’s office to get some help. I hope she responds. I cannot do this alone. \n Which brings me to Aenna. You may hate her as much as anyone else, but I like to pretend that you understand, at least partially, what she is going through. If you had visited just six months ago, she would have been the pride of the nobility. Everyone loved her, or at least her image. The media followed her every move, and never seemed to find anything wrong with her. She was arguably the most powerful unmarried woman in Falsk. She was already pushing the boundaries of convention, but then she went too far, and now all people do is hate her. She pretends not to care, but her public image has been her main focus for years. She must think that all of her hard work has gone down the drain. \n Freir usually comes to parties alone now, but when he does bring Aenna, it is like he is parading her around—showing off his achievement of taming her. Of course, she laughs and smiles, but I have never seen her so miserable. Now that Niera is back home, Aenna should be able to end her time with Freir, but he seems to think they will be together for much longer. I can only hope she knows what she is doing. She may think it beyond reach for herself, but I hope she can find happiness along with the rest of us. \n I wish someone else could see the Aenna that I grew up with. She has tried her best to lock herself away so she avoids getting hurt, but she is still there. She is like Niera in that way. They are both wonderful people hidden behind an almost impenetrable shell. \n I have vented enough. I should buy a journal so I do not have to burden you with my musings. There is something different about knowing that someone will read it, so I may selfishly continue filling these letters. You are more than welcome to throw them away. \n I could not send this letter without a gift. The photograph has all of my siblings and me, though we are all quite a bit younger. This was just before Aenna moved out, which was only moderately scandalous seeing as she was the eldest daughter and still unmarried. We were not especially happy then, either, but we could at least all stand in the same room. Hopefully it can be a reminder of the good things that happened while you were in Falsk. \n Your friend is almost in Littenby. He had a last-minute itinerary change that set him back a few days. He has had some correspondence with Falsk, but not much. Apparently there has been a lot of letters from Drotan addressed to him, but not many answers. From what I have heard about your friend, this is not necessarily a cause for alarm, but I’ll keep searching for news. \n Thank you,'
  },
  {
    id: 'Su-Ze-4',
    conversation: 'Sura/Zephyra',
    receiver: 'Zephyra',
    dateSent: new Date(730, 7, 12),
    dateReceived: new Date(730, 7, 17),
    nextLink: '/pages/Ze-Su-2',
    prevLink: '/pages/Ze-Su-1',
    tag: "Niera is missing and Aenna is happy with Freir",
    text: 'Dear Elia, \n I was nervous before, but now I am scared. \n Terrified is a better word. \n I <s>haven’t</s> have not seen Niera in a few days. Hopefully, by the time you get this letter, <s>she’s</s> she is safe at home, but she’s she is gone. I have knocked on her door a dozen times, but there is no answer. She <s>hasn’t</s> has not been to work. She’s gone. I honestly <s>don’t know</s> wonder if she will come back. She hates me for not letting her go home earlier, and I don’t think she will <s>willingly</s> come back here if she runs into trouble. I like to think that she has changed in the past few months, but I know <s>all too well</s> how quickly Niera can change her mind. <s>I don’t know what</s> There is nothing I can do. She could be anywhere. I know you are far away, and your letters will likely come too late, but could you write to her? She likes you, and it may be the only thing that draws her back. \n I wish it was <s>just</s> only Niera. \n Aenna and Freir should have split up by now. <s>I don’t care if Niera has disappeared</s> despite Niera, Aenna cannot stay with that man any longer. She has done enough. We can figure out how to continue without the <s>connection</s> media on our side. Except she <s>hasn’t left</s> is still with him. I was worried when I didn’t find her at home, but I saw her last night with him. \n She was happy, <s>or as happy as Aenna can get.</s> \n I <s>don’t know fully how to</s> cannot fully describe it. She plays a character with Freir that is very similar to her real personality, and she is excellent at feigning interest in another person—even one who regularly hurts her. I like to think that I know her tells, but this time <s>I don’t know</s> I cannot be sure. She looked more relaxed than she has been for years. She looked more like herself. She <s>didn’t</s> did not stiffen each time Freir looked at her, or even laugh at <s>every<s> each of his jokes. She <s>wasn’t pretending</s> was genuine and sincere. She was <s>normal—as normal as Aenna can be</s> the Aenna I only saw when there was nobody, not even Torin or Niera, to perform for. \n I was only at the party in the hopes that Niera would <s>show up</s> appear, but before I left I saw Aenna asleep on Freir’s shoulder. She never lets her guard down <s>like that</s>. She can hardly sleep in <s>normal</s> safe circumstances, but there she was at a party, which should have been enough to convince her to fight through any level of exhaustion, and next to a man who very obviously only <s>wanted</s> wants to take advantage of her. There were no conniving conversations or sly deals. Just Aenna, sleeping, with her hand loosely in Freir’s, and <s>with</s> a hundred people watching. \n What do I do? <s>Right now</s> I am sitting in my office, writing this letter to distract me from searching this enormous city, street by street, for Niera, or from physically dragging Aenna away from Freir. How can I do nothing? <s>Why am I so powerless?</s> \n I can’t help but wonder if Aenna has started to believe the people who say she’s she is “meant to be” with Freir. <s>I’ve</s> I have heard it dozens of times, Aenna has probably heard it more times than she can count. Maybe she thinks he is the best she can get. Somehow, Freir has convinced her <s>she’s</s> she is not worth anything better. \n I <s>haven’t told</s> cannot tell Torin. He <s>wouldn’t care about </s> dislikes Aenna for being harsh with him, and he <s>shouldn’t have to</s> should only think about <s>anyone beyond</s> Vurmira. Once again, this is my burden to carry alone, <s>and</s> but I am not sure I can carry it. I am not sure I can withstand Niera being found in some a back alley, <s>dead</s> killed <s>from</s> by another overdose or from one of the many dangerous people who walk the streets at night. I <s>don’t know</s> cannot think what I would do if Freir <s>decided he had enough and</s> killed Aenna for some imaginary offense. Yet, I <s>cannot think of anything to do</s> am powerless beyond reporting a missing person, which <s>will only hurt</s> may shatter Niera’s tenuous reputation, and watch as Aenna destroys herself. When did this become my problem to handle? I <s>didn’t</s> did not ask for this. How could anyone think I could hold this family together? Why did I think that I <s>was capable of keeping</s> could keep them all safe? \n <s>I can’t sit still any longer.</s> I <s>don’t do not know am out of ideas for</s> cannot think of what I will do, but I cannot sit here and wait for nothing.'
  },
  {
    id: 'Su-Ze-5',
    conversation: 'Sura/Zephyra',
    receiver: 'Zephyra',
    dateSent: new Date(730, 8, 11),
    dateReceived: new Date(730, 8, 16),
    nextLink: '',
    prevLink: '',
    tag: "Niera is back at home, but won't let Sura talk to her. Aenna is the same",
    text: '',
    },
],
sig: 'assets/sura-sig.png'
}, // //#endregion 
{ //ANCHOR Skeigi #region[yellow]
firstName: 'Skeigi',
lastName: 'Yggdrasil',
letters: [
{
  id: 'Sk-Ze-1',
  conversation: 'Zephyra/Skeigi',
  receiver: 'Zephyra',
  dateSent: new Date(730, 5, 20),
  dateReceived: new Date(730, 5, 25),
  nextLink: '',
  prevLink: '',
  tag: "Pieces of letters Skeigi kept forgetting to send",
  text: '',
},
{
  id: 'Sk-Ze-2',
  conversation: 'Zephyra/Skeigi',
  receiver: 'Zephyra',
  dateSent: new Date(730, 6, 20),
  dateReceived: new Date(730, 6, 25),
  nextLink: '',
  prevLink: '',
  tag: "Skeigi hates the SunDrop dances and is interested in the lute",
  text: '',
},
{
  id: 'Sk-Ze-3',
  conversation: 'Zephyra/Skeigi',
  receiver: 'Zephyra',
  dateSent: new Date(730, 7, 20),
  dateReceived: new Date(730, 7, 25),
  nextLink: '',
  prevLink: '',
  tag: "Skeigi is writing one new thing a day, says he won't be going back to Falsk for a while",
  text: '',
},
{
  id: 'Sk-Ze-4',
  conversation: 'Zephyra/Skeigi',
  receiver: 'Zephyra',
  dateSent: new Date(730, 8, 18),
  dateReceived: new Date(730, 8, 23),
  nextLink: '',
  prevLink: '',
  tag: "Skeigi likes Zephyra's composition, mostly composes for cello/piano now",
  text: '',
},
],
sig: 'assets/skeigi-sig.png'
}, // //#endregion
{ //ANCHOR Vurmira #region[red]
firstName: 'Vurmira',
lastName: 'Verdandi',
letters: [
  {
    id: 'Vu-Ze-1',
    conversation: 'Vurmira/Zephyra',
    receiver: 'Zephyra',
    dateSent: new Date(730, 6, 19),
    dateReceived: new Date(730, 6, 24),
    nextLink: '',
    prevLink: '',
    tag: "Vurmira can't say much, but she thinks Torin is okay",
    text: ''
  },
],
sig: ''
}, // //#endregion
{ //ANCHOR Zephyra #region[cyan]
firstName: 'Zephyra',
lastName: 'Dragonsong',
letters: [
  {
    id: 'Ze-Ni-1',
    conversation: 'Zephyra/Niera',
    receiver: 'Niera',
    dateSent: new Date(730, 4, 5),
    dateReceived: new Date(730, 4, 10),
    nextLink: '',
    prevLink: '',
    tag: "Zephyra will send letters under the name 'Rosamund,' sends a map of Raven's Port",
    text: '',
  },
  {
    id: 'Ze-Ni-2',
    conversation: 'Zephyra/Niera',
    receiver: 'Niera',
    dateSent: new Date(730, 5, 2),
    dateReceived: new Date(730, 5, 7),
    nextLink: '',
    prevLink: '',
    tag: "Zephyra is sad about Skeigi, sends sword-fighting book",
    text: '',
  },
  {
    id: 'Ze-Ni-3',
    conversation: 'Zephyra/Niera',
    receiver: 'Niera',
    dateSent: new Date(730, 6, 8),
    dateReceived: new Date(730, 6, 13),
    nextLink: '',
    prevLink: '',
    tag: "Zephyra received letter from Skeigi and is doing better",
    text: '',
  },
  {
    id: 'Ze-Ni-4',
    conversation: 'Zephyra/Niera',
    receiver: 'Niera',
    dateSent: new Date(730, 7, 12),
    dateReceived: new Date(730, 7, 17),
    nextLink: '',
    prevLink: '',
    tag: "Ravvi history, Ravvi died",
    text: '',
  },
  {
    id: 'Ze-Ni-5',
    conversation: 'Zephyra/Niera',
    receiver: 'Niera',
    dateSent: new Date(730, 7, 20),
    dateReceived: new Date(730, 7, 25),
    nextLink: '',
    prevLink: '',
    tag: "Ravvi is going to write",
    text: '',
  },
  {
    id: 'Ze-Ni-6',
    conversation: 'Zephyra/Niera',
    receiver: 'Niera',
    dateSent: new Date(730, 7, 27),
    dateReceived: new Date(730, 8, 2),
    nextLink: '',
    prevLink: '',
    tag: "Checking in",
    text: '',
  },
  {
    id: 'Ze-Ni-7',
    conversation: 'Zephyra/Niera',
    receiver: 'Niera',
    dateSent: new Date(730, 8, 24),
    dateReceived: new Date(730, 8, 29),
    nextLink: '',
    prevLink: '',
    tag: "Ravvi's recovery is hard, and his memories may never return",
    text: ''
  }
  {
    id: 'Ze-Su-1',
    conversation: 'Sura/Zephyra',
    receiver: 'Sura',
    dateSent: new Date(730, 4, 6),
    dateReceived: new Date(730, 4, 11),
    nextLink: '',
    prevLink: '',
    tag: "Intro letter from Rosamund",
    text: '',
  },
  {
    id: 'Ze-Su-2',
    conversation: 'Sura/Zephyra',
    receiver: 'Sura',
    dateSent: new Date(730, 4, 30),
    dateReceived: new Date(730, 5, 5),
    nextLink: '',
    prevLink: '',
    tag: "From Rosamund, questions about everyone and sends tea",
    text: '',
  },
  {
    id: 'Ze-Su-3',
    conversation: 'Sura/Zephyra',
    receiver: 'Sura',
    dateSent: new Date(730, 5, 30),
    dateReceived: new Date(730, 6, 5),
    nextLink: '',
    prevLink: '',
    tag: "Elia sends vase, checks in",
    text: '',
  },
  {
    id: 'Ze-Su-4',
    conversation: 'Sura/Zephyra',
    receiver: 'Sura',
    dateSent: new Date(730, 7, 2),
    dateReceived: new Date(730, 7, 7),
    nextLink: '',
    prevLink: '',
    tag: "Sends map and pic of Raven's Port",
    text: '',
  },
  {
    id: 'Ze-Su-5',
    conversation: 'Sura/Zephyra',
    receiver: 'Sura',
    dateSent: new Date(730, 5, 6),
    dateReceived: new Date(730, 5, 11),
    nextLink: '',
    prevLink: '',
    tag: "Intro letter from Rosamund",
    text: '',
  },
  {
    id: 'Ze-Su-6',
    conversation: 'Sura/Zephyra',
    receiver: 'Sura',
    dateSent: new Date(730, 7, 27),
    dateReceived: new Date(730, 8, 2),
    nextLink: '',
    prevLink: '',
    tag: "Info on Niera",
    text: '',
  },
  {
    id: 'Ze-Su-7',
    conversation: 'Sura/Zephyra',
    receiver: 'Sura',
    dateSent: new Date(730, 8, 25),
    dateReceived: new Date(730, 8, 30),
    nextLink: '',
    prevLink: '',
    tag: "Zephyra sends more tea, asks about Sura personally",
    text: '',
  },
  {
    id: 'Ze-Sk-1',
    conversation: 'Zephyra/Skeigi',
    receiver: 'Skeigi',
    dateSent: new Date(730, 4, 4),
    dateReceived: new Date(730, 4, 9),
    nextLink: '',
    prevLink: '',
    tag: "Sappy love letter, made it home safely",
    text: '',
  },
  {
    id: 'Ze-Sk-2',
    conversation: 'Zephyra/Skeigi',
    receiver: 'Skeigi',
    dateSent: new Date(730, 4, 25),
    dateReceived: new Date(730, 4, 30),
    nextLink: '',
    prevLink: '',
    tag: "Wrote down folk songs",
    text: '',
  },
  {
    id: 'Ze-Sk-3',
    conversation: 'Zephyra/Skeigi',
    receiver: 'Skeigi',
    dateSent: new Date(730, 5, 2),
    dateReceived: new Date(730, 5, 7),
    nextLink: '',
    prevLink: '',
    tag: "Wrote down spell songs",
    text: '',
  },
  {
    id: 'Ze-Sk-4',
    conversation: 'Zephyra/Skeigi',
    receiver: 'Skeigi',
    dateSent: new Date(730, 6, 7),
    dateReceived: new Date(730, 6, 12),
    nextLink: '',
    prevLink: '',
    tag: "Zephyra's response",
    text: '',
  },
  {
    id: 'Ze-Sk-5',
    conversation: 'Zephyra/Skeigi',
    receiver: 'Skeigi',
    dateSent: new Date(730, 7, 9),
    dateReceived: new Date(730, 7, 14),
    nextLink: '',
    prevLink: '',
    tag: "Working on song, she's happy",
    text: '',
  },
  {
    id: 'Ze-Sk-6',
    conversation: 'Zephyra/Skeigi',
    receiver: 'Skeigi',
    dateSent: new Date(730, 8, 4),
    dateReceived: new Date(730, 8, 9),
    nextLink: '',
    prevLink: '',
    tag: "Finished her composition",
    text: '',
  },
  {
    id: 'Ze-Dr-1',
    conversation: 'Zephyra/Drotan',
    receiver: 'Drotan',
    dateSent: new Date(730, 6, 7),
    dateReceived: new Date(730, 6, 12),
    nextLink: '',
    prevLink: '',
    tag: "Worried about Skeigi, pretends to be Sura",
    text: '',
  },
  {
    id: 'Ze-Dr-2',
    conversation: 'Zephyra/Drotan',
    receiver: 'Drotan',
    dateSent: new Date(730, 7, 1),
    dateReceived: new Date(730, 7, 6),
    nextLink: '',
    prevLink: '',
    tag: "She's not a criminal",
    text: '',
  },
  {
    id: 'Ze-Da-1',
    conversation: 'Zephyra/Davian',
    receiver: 'Davian',
    dateSent: new Date(730, 8, 4),
    dateReceived: new Date(730, 8, 9),
    nextLink: '',
    prevLink: '',
    tag: "Aenna desperate",
    text: '',
  },
  {
    id: 'Ze-Da-2',
    conversation: 'Zephyra/Davian',
    receiver: 'Davian',
    dateSent: new Date(730, 9, 1),
    dateReceived: new Date(730, 9, 6),
    nextLink: '',
    prevLink: '',
    tag: "You're already writing to Aenna? Making new trade rout to Undarmaat and Onnsel",
    text: '',
  },
  {
    id: 'Ze-Vu-1',
    conversation: 'Vurmira/Zephyra',
    receiver: 'Vurmira',
    dateSent: new Date(730, 6, 1),
    dateReceived: new Date(730, 6, 6),
    nextLink: '',
    prevLink: '',
    tag: "Asks about Torin",
    text: '',
  },
  {
    id: 'Ze-Vu-2',
    conversation: 'Vurmira/Zephyra',
    receiver: 'Vurmira',
    dateSent: new Date(730, 7, 4),
    dateReceived: new Date(730, 7, 9),
    nextLink: '',
    prevLink: '',
    tag: "How are things with Torin?",
    text: '',
  }
],
sig: '',
}, // //#endregion
{ //ANCHOR Ravvi #region[pink]
firstName: 'Ravvi',
lastName: '',
letters: [
  {
    id: 'Ra-Ni-1',
    conversation: 'Ravvi/Niera',
    receiver: 'Niera',
    dateSent: new Date(730, 7, 24),
    dateReceived: new Date(730, 7, 29),
    nextLink: '',
    prevLink: '',
    tag: 'Starts 7/22, sends 7/24, cynical',
    text: ''
  },
  {
    id: 'Ra-Ni-2',
    conversation: 'Ravvi/Niera',
    receiver: 'Niera',
    dateSent: new Date(730, 8, 28),
    dateReceived: new Date(730, 8, 33),
    nextLink: '',
    prevLink: '',
    tag: 'So much info',
    text: ''
  }
],
sig: ''
} // //#endregion
]
}
