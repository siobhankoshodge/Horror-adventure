import React, { useState, useEffect } from 'react';

const BlackwoodGame = () => {
  const [currentScene, setCurrentScene] = useState('start');
  const [hasLocket, setHasLocket] = useState(false);
  const [hasHolyWater, setHasHolyWater] = useState(false);
  const [hasCross, setHasCross] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      const lights = document.querySelectorAll('.flicker');
      lights.forEach(light => {
        if (Math.random() > 0.95) {
          light.style.opacity = Math.random() * 0.3 + 0.7;
        }
      });
    }, 100);
    return () => clearInterval(flickerInterval);
  }, []);

  // GitHub image base URL
  const GITHUB_BASE = 'https://raw.githubusercontent.com/siobhankoshodge/Horror-adventure/main/images';

  // Scene images from your GitHub repository
  const sceneImages = {
    start: `${GITHUB_BASE}/scene-start.png`,
    garden: `${GITHUB_BASE}/scene-garden.png`,
    frontDoor: `${GITHUB_BASE}/scene-frontDoor.png`,
    study: `${GITHUB_BASE}/scene-study.png`,
    basement: `${GITHUB_BASE}/scene-basement.png`,
    basementPrepared: `${GITHUB_BASE}/scene-basementPrepared.png`,
    interrogateDemon: `${GITHUB_BASE}/scene-interrogateDemon.png`,
    upstairs: `${GITHUB_BASE}/scene-upstairs.png`,
    upstairsPrepared: `${GITHUB_BASE}/scene-upstairsPrepared.png`,
    margaretStory: `${GITHUB_BASE}/scene-margaretStory.png`,
    margaretHelp: `${GITHUB_BASE}/scene-margaretHelp.png`,
    searchForLocket: `${GITHUB_BASE}/scene-searchForLocket.png`,
    backEntrance: `${GITHUB_BASE}/scene-backEntrance.png`,
    kitchenEntry: `${GITHUB_BASE}/scene-kitchenEntry.png`,
    tunnel: `${GITHUB_BASE}/scene-tunnel.png`,
    urgentSearch: `${GITHUB_BASE}/scene-urgentSearch.png`,
    desperateDefense: `${GITHUB_BASE}/scene-desperateDefense.png`,
    gatherItems: `${GITHUB_BASE}/scene-gatherItems.png`,
    promiseHelp: `${GITHUB_BASE}/scene-promiseHelp.png`,
    margaretJoins: `${GITHUB_BASE}/scene-margaretJoins.png`,
    findMargaret: `${GITHUB_BASE}/scene-findMargaret.png`,
    escapeTunnel: `${GITHUB_BASE}/scene-escapeTunnel.png`,
    fightCult: `${GITHUB_BASE}/scene-fightCult.png`,
    escapeFailed: `${GITHUB_BASE}/scene-escapeFailed.png`,
    possessed: `${GITHUB_BASE}/scene-possessed.png`,
    finalRitual: `${GITHUB_BASE}/scene-finalRitual.png`,
    victoryTogether: `${GITHUB_BASE}/scene-victoryTogether.png`
  };

  const handleImageError = (scene) => {
    setImageError(prev => ({ ...prev, [scene]: true }));
  };

  const SceneImage = ({ scene }) => {
    const imageUrl = sceneImages[scene] || sceneImages.start;
    
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {!imageError[scene] ? (
          <>
            <img 
              src={imageUrl}
              alt={`Scene: ${scene}`}
              onError={() => handleImageError(scene)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            {/* Comic book overlay effects */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.1) 2px, rgba(0,0,0,.1) 4px)',
              pointerEvents: 'none',
              mixBlendMode: 'multiply'
            }} />
          </>
        ) : (
          <div style={{
            color: '#DC143C',
            textAlign: 'center',
            padding: '2rem',
            fontFamily: 'Impact'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏚️</div>
            <div>Image loading...</div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.6 }}>
              {scene}
            </div>
          </div>
        )}
      </div>
    );
  };

  const scenes = {
    start: {
      text: "You stand before Blackwood Manor at midnight. The Victorian mansion looms against the storm-heavy sky.\n\nThree days ago, an anonymous letter arrived—written in dried blood. It knew your name. It knew about your past cases. It knew things no one should know.\n\nThe letter spoke of a ritual performed Halloween 1987, of a demon trapped between worlds. It promised answers about your uncle Thomas, who disappeared investigating this place in 1986.\n\nYour EMF reader is maxed out. The front door hangs ajar, whispers drifting from within. Thunder rumbles. Through a gap in the fence, you spot something glinting in the overgrown garden.",
      image: "🏚️",
      choices: [
        { text: "Enter through the front door", next: "frontDoor" },
        { text: "Circle to the back entrance", next: "backEntrance" },
        { text: "Investigate the glinting object in the garden", next: "garden" }
      ]
    },

    garden: {
      text: "You push through dead rosebushes. Everything died decades ago, yet still grows in twisted shapes.\n\nThe glinting object is a silver pocket watch, warm—impossibly warm. The hands spin backwards.\n\nInscription: 'To my dearest Margaret, may time never separate us. - E.B. 1987'\n\nMargaret Blackwood. The sacrificed girl. This was her father's.\n\nA window on the second floor suddenly illuminates. Candlelight. A shadow moves behind curtains.\n\nSomeone is watching you.",
      image: "⌚",
      choices: [
        { text: "Enter through the front door", next: "frontDoor" },
        { text: "Go to the back entrance", next: "backEntrance" }
      ]
    },

    frontDoor: {
      text: "The door swings open with a scream of metal. The foyer reeks of decay and sulfur.\n\nOccult symbols cover every surface in dried blood. Pentagrams. Ancient markings that hurt to look at.\n\nA grandfather clock with no hands begins to chime. Thirteen times.\n\nTemperature drops twenty degrees.\n\nThree paths: Left—basement door, chanting echoes below. Right—stairs, child's laughter above. Straight—a study, door ajar, papers scattered.",
      image: "⏰",
      choices: [
        { text: "Investigate the study", next: "study" },
        { text: "Descend to the basement", next: "basement" },
        { text: "Climb the stairs", next: "upstairs" }
      ]
    },

    study: {
      text: "The study is chaos. Books torn from shelves.\n\nYou find Edward Blackwood's diary:\n\n'October 15, 1987: The demon Azoroth promises knowledge. All it requires is one pure soul. Margaret... forgive me.'\n\n'October 31, 1987: Something went wrong. Margaret resisted. The ritual broke. Azoroth is trapped. The others won't stop screaming. I can hear Margaret in the walls. What have I done?'\n\nA map marks the basement: 'RITUAL CHAMBER - DO NOT ENTER WITHOUT PROTECTION'\n\nBehind a bookshelf: a hidden compartment with holy water, salt, and a silver dagger.\n\nEdward's final note: 'To banish Azoroth: holy water, blessed silver, salt, Margaret's locket (contains her soul), and his true name backwards: HTORAZĀ.'",
      image: "📚",
      choices: [
        { text: "Take everything and go to basement", next: "basementPrepared" },
        { text: "Find Margaret's locket upstairs first", next: "upstairsPrepared" }
      ]
    },

    basement: {
      text: "Narrow stairs creak. Chanting grows louder.\n\nThe basement is a circle. Seven bodies hang from meat hooks—the cult members. Gray skin, but eyes open. Watching.\n\nCenter: a summoning circle pulsing with dark energy.\n\nA voice directly into your skull:\n\n\"SARAH CHEN. I HAVE BEEN WAITING THIRTY-EIGHT YEARS.\"\n\nBlack flame erupts. A massive shadow—nine feet tall, horned. Eyes like coals.\n\n\"BECOME MY VESSEL. I SHALL GRANT YOU POWER BEYOND MORTAL COMPREHENSION. YOU WILL SEE THE FUTURE. SPEAK WITH THE DEAD. YOU WILL BE AS A GOD.\"\n\nThe cult members writhe:\n\n\"Join us... eternal power...\"",
      image: "😈",
      choices: [
        { text: "Accept the demon's offer", next: "possessed" },
        { text: "Refuse and try to escape", next: "escapeFailed" },
        { text: "Stall for time - ask questions", next: "interrogateDemon" }
      ]
    },

    basementPrepared: {
      text: "You descend with holy water, salt, and the silver dagger.\n\nThe demon manifests immediately.\n\n\"BOLD. YOU THINK TRINKETS CAN HARM ME?\"\n\n\"You're trapped,\" you counter. \"Thirty-eight years because a little girl said no.\"\n\nSilence. Then a roar.\n\n\"I WILL TEAR YOU APART!\"\n\nThe cult members drop from hooks, crawling toward you.\n\nYou pour salt in a protective circle. They recoil, screaming.\n\n\"CLEVER,\" the demon admits. \"BUT SALT ONLY LASTS SO LONG.\"\n\nYou need the locket still.",
      image: "⚔️",
      choices: [
        { text: "Rush upstairs to find the locket", next: "urgentSearch" },
        { text: "Try to hold them off longer", next: "desperateDefense" }
      ]
    },

    interrogateDemon: {
      text: "\"Wait. Why do you need consent?\"\n\nThe demon laughs.\n\n\"INTELLIGENT. THE BINDING REQUIRES CONSENT. THE VESSEL MUST ACCEPT WILLINGLY. THAT IS THE LAW.\"\n\n\"And Margaret refused.\"\n\n\"THE CHILD WAS STRONGER THAN ANTICIPATED. HER WILL BROKE THE RITUAL. SHE DIED, BUT HER SOUL FRACTURED. PART ESCAPED INTO HER LOCKET. PART... REMAINS HERE. SUFFERING.\"\n\nBeneath the chanting—a little girl crying.\n\n\"I CAN END HER SUFFERING. COMPLETE THE RITUAL. OR REFUSE... AND SHE SCREAMS FOR ETERNITY.\"",
      image: "🎭",
      choices: [
        { text: "Accept to save Margaret's soul", next: "possessed" },
        { text: "Refuse - find another way", next: "findMargaret" }
      ]
    },

    upstairs: {
      text: "The second floor is frozen in 1987. Newspapers: 'LOCAL FAMILY MISSING'\n\nYou pass rooms: bathroom with moving black water, master bedroom with blood on ceiling.\n\nThen: a door with peeling pink paint. 'MARGARET'\n\nA girl's bedroom. Pink wallpaper, stuffed animals. Music box plays.\n\nDiary, childish handwriting:\n\n'October 31: Tomorrow I turn seven. I found Mommy in the basement. She's not alive. The house is HUNGRY.'\n\nMusic box stops.\n\nTranslucent figure appears—girl in blood-stained white dress. Throat slit.\n\n\"You came,\" she whispers. \"I wrote the letter. In blood. I've waited so long.\"\n\nThis is Margaret Blackwood.",
      image: "👻",
      choices: [
        { text: "Ask Margaret what happened", next: "margaretStory" },
        { text: "Ask how to stop the demon", next: "margaretHelp" },
        { text: "Search for her locket immediately", next: "searchForLocket" }
      ]
    },

    upstairsPrepared: {
      text: "You climb stairs armed. You need the locket.\n\nMargaret manifests when you enter, sees your supplies.\n\n\"You're ready. You came prepared. Thank you.\"\n\nShe points to a floorboard.\n\n\"My locket. When the knife came down, I held it so tight. That's why part of me stayed in it.\"\n\nHer ancient eyes look at you.\n\n\"With those items, you can do the counter-ritual. But you must face him in the circle. He'll offer power. Show visions. Don't listen.\"\n\nShe fades slightly.\n\n\"I'm getting weaker. Please... end this.\"",
      image: "🔮",
      choices: [
        { text: "Take the locket and go to basement", next: "finalRitual" },
        { text: "Ask Margaret to come with you", next: "margaretJoins" }
      ]
    },

    margaretStory: {
      text: "\"What happened?\"\n\nMargaret sits.\n\n\"Daddy took me to the basement. His friends in robes. The circle was drawn.\n\nThey made me stand in the center. Chanting. Then Daddy had a knife.\n\nHe said 'I'm sorry. This is for the greater good.'\n\nI said no. I screamed no. I refused. And that broke something. The circle cracked. The demon came through halfway. Stuck.\n\nDaddy cut my throat. Cold and dark. But I didn't go away. I was split. Some here. Some in the locket. Some in the circle.\n\nThe demon was furious. Pulled the cultists into limbo. Daddy tried to finish alone. He died down there.\"\n\nShe looks at you.\n\n\"I've waited for someone strong enough to end it.\"",
      image: "💔",
      choices: [
        { text: "Promise to help her", next: "promiseHelp" },
        { text: "Ask what you need to do", next: "margaretHelp" }
      ]
    },

    margaretHelp: {
      text: "\"How do I stop Azoroth?\"\n\nMargaret's expression grows serious.\n\n\"The counter-ritual requires:\n\n1. **Holy Water** - to purify\n2. **Blessed Silver** - to cut bonds\n3. **Salt** - to break the pattern\n4. **My Locket** - my soul gives protection\n5. **His true name backwards** - HTORAZĀ\n\nStand in the circle. Pour holy water. Sprinkle salt. Use silver to cut yourself—blood for blood. Then speak the incantation holding my locket.\n\nBut Sarah... he'll show you your deepest fears. Darkest desires. Greatest failures. You have to resist.\"\n\nShe looks intently.\n\n\"If you banish Azoroth, the cultists will be freed too. Some might survive. Some might attack. I don't want you to die saving me.\"",
      image: "📋",
      choices: [
        { text: "Where is your locket?", next: "searchForLocket" },
        { text: "Let's gather everything", next: "gatherItems" }
      ]
    },

    searchForLocket: {
      text: "\"Where is it?\"\n\nMargaret points to the window. \"Under the floorboard. Third from the corner.\"\n\nYou pry it up. Inside: a silver locket. When you touch it, warmth floods through you.\n\nYou open it. Young Margaret smiling. Her mother, Eleanor.\n\nThe locket glows.\n\nMargaret becomes more solid. \"Thank you. You have part of me now. I can lend you strength. But we need more. Do you have the holy artifacts?\"",
      image: "📿",
      choices: [
        { text: "I have everything - let's end this", next: "finalRitual" },
        { text: "I need to find the other items first", next: "gatherItems" }
      ]
    },

    backEntrance: {
      text: "The cellar entrance is hidden behind vines. Steps descend. Temperature drops. Fresh candles line the passage—someone was here recently.\n\nThe tunnel splits. One path leads deeper underground. The other climbs upward through the foundation.",
      image: "🕯️",
      choices: [
        { text: "Follow the tunnel deeper", next: "tunnel" },
        { text: "Take stairs up into the manor", next: "kitchenEntry" }
      ]
    },

    kitchenEntry: {
      text: "You emerge in the kitchen through a hidden panel. Time capsule—dishes from 1987.\n\nA cabinet marked with a cross. Inside: holy water bottle, silver crucifix, prayer book.\n\nYou pocket all three.\n\nBelow, chanting grows louder. Above, child's laughter.",
      image: "✝️",
      choices: [
        { text: "Head to the basement", next: "basementPrepared" },
        { text: "Investigate the laughter upstairs", next: "upstairsPrepared" }
      ]
    },

    tunnel: {
      text: "The tunnel opens into a catacomb. Alcoves line the walls—seven. Each contains a robed body.\n\nBut they're not quite dead.\n\nMilky eyes open. Skeletal hands reach out.\n\n\"Join us... complete the circle... become eternal...\"\n\nThey crawl from alcoves with unnatural speed.\n\nYou have seconds.",
      image: "💀",
      choices: [
        { text: "Run back the way you came", next: "escapeTunnel" },
        { text: "Fight through to the ritual chamber", next: "fightCult" }
      ]
    },

    urgentSearch: {
      text: "You sprint upstairs. The manor fights you—stairs collapse, doors slam. But you reach Margaret's room, find the locket.\n\nMargaret appears. \"Now! Do it now!\"\n\nYou race back down. The salt circle is weakening. You have everything.",
      image: "⚡",
      choices: [
        { text: "Perform the final ritual", next: "finalRitual" }
      ]
    },

    desperateDefense: {
      text: "You reinforce the salt circle. The cult members claw at it, shrieking.\n\nBut the demon attacks your mind.\n\nVisions flood. Your uncle Thomas, alive. Your greatest triumph. Love. Success. Everything you've ever wanted.\n\n\"ALL OF THIS CAN BE YOURS,\" Azoroth whispers. \"JUST SAY YES.\"\n\nThe visions are so real. So tempting.\n\nBut you remember: demons lie.\n\nYou shake them off. The circle holds. But you can't stay forever.",
      image: "😵",
      choices: [
        { text: "Break through and run for the locket", next: "urgentSearch" },
        { text: "Accept the demon's offer", next: "possessed" }
      ]
    },

    gatherItems: {
      text: "With Margaret guiding, you move through the manor.\n\nKitchen: holy water in a cabinet marked with a cross.\n\nPantry: pure sea salt in ceramic jars.\n\nMaster bedroom: Eleanor's silver cross and wedding ring.\n\nYou have everything. The house knows—walls bleed, doors slam, temperature plummets.\n\n\"SARAH CHEN,\" the demon's voice echoes. \"YOU CANNOT WIN. I AM ETERNAL.\"\n\nMargaret squeezes your hand. \"Don't listen. We have everything. Time to end this.\"",
      image: "🎒",
      choices: [
        { text: "Descend to face the demon", next: "finalRitual" }
      ]
    },

    promiseHelp: {
      text: "\"I promise. I'll end this. I'll free you and anyone else trapped.\"\n\nMargaret's form brightens.\n\n\"Thank you. Thank you so much.\" She touches your hand. Cold but not painful. \"I can feel your conviction. It makes me stronger too.\"\n\nThe locket in your pocket grows warm.\n\n\"Take the locket. With it, you'll have my protection. The demon can't possess you while you carry part of my soul.\"\n\nYou retrieve it and put it on. A subtle shift—like a weight lifts.\n\n\"Now we need the other items. Once we start gathering them, Azoroth will know. The house will fight back. We won't be able to turn back.\"",
      image: "💪",
      choices: [
        { text: "I'm ready. Let's do this.", next: "gatherItems" }
      ]
    },

    margaretJoins: {
      text: "\"Come with me. We do this together.\"\n\nMargaret smiles. \"Together. Yes.\"\n\nYou take the locket and head to the basement, her spirit floating beside you, growing brighter.\n\nWhen you enter the ritual chamber, the demon senses both.\n\n\"THE CHILD AND THE INVESTIGATOR. YOU THINK YOUR BOND GIVES STRENGTH?\"\n\n\"It does,\" Margaret says. \"We're not alone. And you are.\"\n\nThat strikes him. Uncertainty in his burning eyes.\n\nYou begin the ritual together, Margaret guiding your words. The demon fights with everything.\n\nBut against your combined will, he cannot win.",
      image: "💝",
      choices: [
        { text: "Complete the banishment", next: "victoryTogether" }
      ]
    },

    findMargaret: {
      text: "\"No. I won't trade myself. There's another way.\"\n\nThe demon roars. \"THEN SHE SUFFERS FOREVER!\"\n\n\"No. I'm going to free her the right way. By banishing you.\"\n\nYou flee the basement. The demon's rage shakes the foundation. You need to find Margaret, get the locket, gather items.\n\nYou race upstairs to her room.",
      image: "🏃",
      choices: [
        { text: "Find Margaret's room", next: "upstairs" }
      ]
    },

    escapeTunnel: {
      text: "You sprint back through the tunnel, cult members crawling after you. You burst through the cellar entrance.\n\nTheir clawing persists. You run to your car and drive away.\n\nYou escaped.\n\nBut as you drive home, you glance in the rearview mirror. In the back seat, lit by streetlights, sits one of the cult members.\n\nIt smiles.\n\n\"We are everywhere.\"\n\nThe last thing you see is its hand reaching for your throat.\n\nYou thought you escaped. You were wrong.",
      image: "🚗",
      ending: "ESCAPE FAILED - THEY FOLLOWED",
      endingType: "bad"
    },

    fightCult: {
      text: "You charge through the mass. Skeletal hands grab you, tearing clothes and skin. Cold fingers on your ankles pull you down.\n\nYou fall among them. They drag you to an altar. Chanting fills your ears.\n\nThe last thing you feel is a knife against your throat.\n\nDarkness.\n\nWhen you wake, you're one of them. Trapped in the walls. Neither living nor dead. Waiting.",
      image: "⚰️",
      ending: "BECAME THE SACRIFICE",
      endingType: "worst"
    },

    escapeFailed: {
      text: "You try to run. But the demon is faster.\n\nTentacles of shadow wrap around you. You're lifted, unable to breathe.\n\n\"I OFFERED YOU POWER. YOU CHOSE DEATH.\"\n\nThe tentacles tighten. Black spots. The last thing you see is the cult members watching with empty eyes.\n\nDarkness. Nothing.\n\nYou failed. Margaret remains trapped.",
      image: "💀",
      ending: "KILLED BY AZOROTH",
      endingType: "worst"
    },

    possessed: {
      text: "You step into the circle.\n\n\"YES,\" the demon hisses. \"ACCEPT MY GIFT.\"\n\nPower floods through you. Dark, intoxicating, terrible. Your eyes turn black. Veins glow red.\n\nYou feel Azoroth settling into your soul like a parasite.\n\nYou leave the manor. You go about your life. But you're different now. At night, you hear his whispers. He makes you do things. Terrible things.\n\nYou thought you could control it.\n\nYou were wrong.\n\nYou are his puppet now. Forever.",
      image: "🎭",
      ending: "POSSESSED BY AZOROTH",
      endingType: "bad"
    },

    finalRitual: {
      text: "You stand in the circle's center, armed with everything: locket around your neck, holy water, salt, silver dagger.\n\nMargaret's spirit stands beside you, glowing. The seven cultist bodies watch with desperate hope.\n\nAzoroth towers before you.\n\n\"THIS IS YOUR LAST CHANCE. LEAVE NOW. I WILL NOT PURSUE.\"\n\n\"I'm not leaving,\" you say firmly. \"I'm ending this. Tonight.\"\n\nThe demon's expression shifts to... respect?\n\n\"SO BE IT. THEN WE FIGHT.\"\n\nTemperature drops to freezing. Candles flare. Margaret takes your hand.\n\n\"Together. On three. One... two... THREE!\"\n\nYou pour the holy water in a circle. It screams. You sprinkle salt, breaking the binding. The dagger—you cut your palm, blood falling onto the locket.\n\n\"BY THE BLOOD OF THE INNOCENT! BY THE WILL OF THE RIGHTEOUS! BY THE NAME SPOKEN TRUE! I BANISH THEE, AZOROTH!\"\n\nMargaret joins: \"HTORAZĀ! HTORAZĀ! HTORAZĀ!\"\n\nReality tears. White light erupts. The demon thrashes, roars, fights—\n\nBut it's losing.\n\nThe circle shatters. The binding breaks. With a final world-shaking scream, Azoroth is pulled back into the infernal realm.\n\nThe cultists fall. Some age and die instantly, peaceful. Others gasp and live, mortal once more.\n\nMargaret glows brighter and brighter. \"Thank you. Thank you so much. I can go now. I can finally see Mommy again.\"\n\nShe fades into light. Into peace.\n\nThe manor begins to collapse. You run, helping survivors. Behind you, Blackwood Manor crumbles into rubble.\n\nYou make it out. You all make it out.\n\nAmong the survivors: Thomas Chen. Your uncle. Alive.\n\nYou stand in the ruins as dawn breaks. You've ended the nightmare.\n\nYou did it.\n\nYou won.",
      image: "🌟",
      ending: "DEMON BANISHED - PERFECT VICTORY",
      endingType: "good"
    },

    victoryTogether: {
      text: "With Margaret beside you, her spirit lending strength, you complete the banishment.\n\nThe demon fights harder than ever, but your bond proves stronger than his malice.\n\nWhen the final words are spoken and Azoroth is torn from this reality, Margaret turns to you with tears of joy.\n\n\"Thank you for not making me face him alone. Thank you for being my friend, even if only for tonight.\"\n\nShe hugs you—cold but real—then fades into the most beautiful light you've ever seen.\n\nThe cultists are freed. Your uncle Thomas survives. The manor collapses peacefully.\n\nYou stand in the dawn and know: you didn't just save Margaret. She saved you too.\n\nYou won. Together.",
      image: "🌅",
      ending: "DEMON BANISHED - TRUE FRIENDSHIP",
      endingType: "good"
    }
  };

  const handleChoice = (nextScene) => {
    if (nextScene === 'kitchenEntry') {
      setHasHolyWater(true);
      setHasCross(true);
    }
    setCurrentScene(nextScene);
    window.scrollTo(0, 0);
  };

  const restartGame = () => {
    setCurrentScene('start');
    setHasLocket(false);
    setHasHolyWater(false);
    setHasCross(false);
    setGameStarted(false);
    setImageError({});
  };

  const currentStory = scenes[currentScene];

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="text-center z-10 max-w-2xl">
          <h1 style={{fontFamily:'Impact',fontSize:'4rem',color:'#DC143C',textShadow:'4px 4px 0px #000'}}>
            THE BLACKWOOD RITUAL
          </h1>
          <p style={{color:'#DC143C',fontSize:'1.2rem',marginBottom:'2rem'}}>ILLUSTRATED HORROR ADVENTURE</p>
          <div style={{color:'#ccc',marginBottom:'2rem'}}>
            <p>You are Sarah Chen, paranormal investigator.</p>
            <p>An anonymous letter speaks of Blackwood Manor—where a demon was summoned in 1987.</p>
            <p>The ritual was never completed. The demon remains. Waiting.</p>
          </div>
          <button 
            onClick={() => setGameStarted(true)}
            style={{
              background:'#DC143C',padding:'1rem 2rem',border:'4px solid #000',
              color:'white',fontFamily:'Impact',fontSize:'1.2rem',cursor:'pointer',
              boxShadow:'6px 6px 0px #000'
            }}
          >
            BEGIN YOUR DESCENT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 pb-4" style={{borderBottom:'4px solid #DC143C'}}>
          <h1 style={{fontFamily:'Impact',fontSize:'2.5rem',color:'#DC143C',textShadow:'3px 3px 0px #000'}}>
            THE BLACKWOOD RITUAL
          </h1>
          {(hasLocket || hasHolyWater || hasCross) && (
            <div style={{marginTop:'1rem',display:'flex',justifyContent:'center',gap:'1rem'}}>
              {hasLocket && <span style={{color:'#FFD700'}}>🔮 LOCKET</span>}
              {hasHolyWater && <span style={{color:'#87CEEB'}}>💧 HOLY WATER</span>}
              {hasCross && <span style={{color:'#FFD700'}}>✝️ CRUCIFIX</span>}
            </div>
          )}
        </div>

        <div style={{
          background:'#1a1a1a',border:'6px solid #000',boxShadow:'12px 12px 0px rgba(0,0,0,0.5)',
          marginBottom:'2rem',position:'relative'
        }}>
          <div style={{
            position:'absolute',top:'-6px',left:'-6px',right:'-6px',bottom:'-6px',
            border:'3px solid #DC143C',pointerEvents:'none'
          }}/>
          
          <div style={{width:'100%',height:'400px',borderBottom:'4px solid #000'}}>
            <SceneImage scene={currentScene} />
          </div>

          <div style={{padding:'2rem'}}>
            <div style={{fontSize:'3rem',textAlign:'center',marginBottom:'1rem'}}>
              {currentStory.image}
            </div>
            
            <div style={{fontSize:'1rem',lineHeight:'1.6',whiteSpace:'pre-line',marginBottom:'1.5rem'}}>
              {currentStory.text}
            </div>

            {currentStory.ending && (
              <div style={{
                padding:'2rem',margin:'2rem 0',border:'6px solid #000',textAlign:'center',
                background: currentStory.endingType === 'good' ? 'rgba(34,139,34,0.3)' : 
                           currentStory.endingType === 'worst' ? 'rgba(0,0,0,0.8)' : 
                           'rgba(139,0,0,0.3)',
                borderColor: currentStory.endingType === 'good' ? '#228B22' : 
                            currentStory.endingType === 'worst' ? '#000' : '#8B0000'
              }}>
                <div style={{fontFamily:'Impact',fontSize:'2rem',marginBottom:'0.5rem',
                  color: currentStory.endingType === 'good' ? '#90EE90' : 
                         currentStory.endingType === 'worst' ? '#8B0000' : '#DC143C'
                }}>
                  {currentStory.ending}
                </div>
                <div style={{fontSize:'0.9rem',letterSpacing:'0.2rem'}}>
                  {currentStory.endingType === 'good' ? '★ YOU SURVIVED ★' : 
                   currentStory.endingType === 'worst' ? '☠ GAME OVER ☠' : 
                   '† THE DARKNESS WINS †'}
                </div>
              </div>
            )}

            {currentStory.choices && currentStory.choices.length > 0 && (
              <div style={{display:'flex',flexDirection:'column',gap:'1rem',marginTop:'2rem'}}>
                {currentStory.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => handleChoice(choice.next)}
                    style={{
                      background:'#000',border:'4px solid #DC143C',padding:'1rem 1.5rem',
                      fontSize:'1rem',color:'#e0e0e0',textAlign:'left',cursor:'pointer',
                      boxShadow:'4px 4px 0px rgba(220,20,60,0.5)',transition:'all 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background='#1a0000';
                      e.currentTarget.style.transform='translate(2px,2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background='#000';
                      e.currentTarget.style.transform='translate(0,0)';
                    }}
                  >
                    <span style={{color:'#DC143C',marginRight:'0.75rem',fontWeight:'bold'}}>▶</span>
                    {choice.text}
                  </button>
                ))}
              </div>
            )}

            {currentStory.ending && (
              <button
                onClick={restartGame}
                style={{
                  width:'100%',marginTop:'2rem',padding:'1.25rem',background:'#DC143C',
                  border:'4px solid #000',color:'white',fontFamily:'Impact',fontSize:'1.2rem',
                  cursor:'pointer',boxShadow:'6px 6px 0px #000'
                }}
              >
                ↻ RESTART STORY
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackwoodGame;
