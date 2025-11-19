// Helper to encode names so they aren't immediately readable in source
// We keep this helper here, but since we are exporting data directly, 
// the data below is pre-encoded using btoa() from the previous step.
const encode = (str) => btoa(str);

export const figures = [
  // =================================================================
  // EUROPE
  // =================================================================
  {
    id: 'eu-1',
    encryptedName: 'QWxiZXJ0IEVpbnN0ZWlu',
    facts: [
      "I was a theoretical physicist born in Germany who later emigrated to the United States.",
      "My work fundamentally changed the understanding of space, time, and gravity.",
      "I developed the theory of relativity and the famous equation E=mc²."
    ],
    hint: "Think of wild hair and a Nobel Prize in Physics (1921).",
    continent: 'Europe'
  },
  {
    id: 'eu-2',
    encryptedName: 'V2lsbGlhbSBTaGFrZXNwZWFyZQ==',
    facts: [
      "I was an English playwright, poet, and actor, often regarded as the greatest writer in the English language.",
      "My works include 39 plays, 154 sonnets, and two long narrative poems.",
      "I wrote 'Hamlet', 'Romeo and Juliet', and 'Macbeth'."
    ],
    hint: "The Bard of Avon.",
    continent: 'Europe'
  },
  {
    id: 'eu-3',
    encryptedName: 'TWFyaWUgQ3VyaWU=',
    facts: [
      "I was a Polish and naturalized-French physicist and chemist.",
      "I conducted pioneering research on radioactivity, a term I coined.",
      "I was the first person to win two Nobel Prizes in two different scientific fields."
    ],
    hint: "Discovered polonium and radium.",
    continent: 'Europe'
  },
  {
    id: 'eu-4',
    encryptedName: 'TGVvbmFyZG8gZGEgVmluY2k=',
    facts: [
      "I was an Italian polymath of the High Renaissance active as a painter, engineer, and scientist.",
      "My notebooks are filled with sketches of flying machines, anatomy, and weaponry.",
      "I painted the 'Mona Lisa' and 'The Last Supper'."
    ],
    hint: "The archetypal Renaissance Man.",
    continent: 'Europe'
  },
  {
    id: 'eu-5',
    encryptedName: 'UXVlZW4gRWxpemFiZXRoIEk=',
    facts: [
      "I was Queen of England and Ireland from 1558 until my death in 1603.",
      "I was the last of the five monarchs of the House of Tudor.",
      "My reign is known for the flourishing of English drama and the defeat of the Spanish Armada."
    ],
    hint: "The Virgin Queen.",
    continent: 'Europe'
  },
  {
    id: 'eu-6',
    encryptedName: 'TmFwb2xlb24gQm9uYXBhcnRl',
    facts: [
      "I was a French military and political leader who rose to prominence during the French Revolution.",
      "I crowned myself Emperor of the French in 1804.",
      "My final defeat occurred at the Battle of Waterloo."
    ],
    hint: "Often depicted with a hand in his vest.",
    continent: 'Europe'
  },
  {
    id: 'eu-7',
    encryptedName: 'Q2hhcmxlcyBEYXJ3aW4=',
    facts: [
      "I was an English naturalist, geologist, and biologist.",
      "I am best known for my contributions to the science of evolution.",
      "I wrote 'On the Origin of Species' after my voyage on the HMS Beagle."
    ],
    hint: "Theory of Natural Selection.",
    continent: 'Europe'
  },
  {
    id: 'eu-8',
    encryptedName: 'SXNhYWMgTmV3dG9u',
    facts: [
      "I was an English mathematician, physicist, astronomer, and author.",
      "I formulated the laws of motion and universal gravitation.",
      "I am often associated with a story about a falling apple."
    ],
    hint: "Author of Principia Mathematica.",
    continent: 'Europe'
  },
  {
    id: 'eu-9',
    encryptedName: 'V2luc3RvbiBDaHVyY2hpbGw=',
    facts: [
      "I was a British statesman who served as Prime Minister of the United Kingdom during World War II.",
      "I am famous for my speeches motivating the British people to 'never surrender'.",
      "I was also an accomplished writer and won the Nobel Prize in Literature."
    ],
    hint: "V for Victory.",
    continent: 'Europe'
  },
  {
    id: 'eu-10',
    encryptedName: 'V29sZmdhbmcgQW1hZGV1cyBNb3phcnQ=',
    facts: [
      "I was a prolific and influential composer of the Classical period.",
      "I composed over 600 works, including symphonies, concertante, chamber, operatic, and choral music.",
      "I was a child prodigy who began composing at age five."
    ],
    hint: "Composer of 'The Magic Flute' and 'Don Giovanni'.",
    continent: 'Europe'
  },
  {
    id: 'eu-11',
    encryptedName: 'UXVlZW4gVmljdG9yaWE=',
    facts: [
      "I was Queen of the United Kingdom for 63 years, a period known as the Victorian era.",
      "My reign saw great industrial, cultural, political, scientific, and military change.",
      "I became known as the 'Grandmother of Europe' due to my children marrying into royal families across the continent."
    ],
    hint: "Wore black mourning clothes for half her life.",
    continent: 'Europe'
  },
  {
    id: 'eu-12',
    encryptedName: 'QWxleGFuZGVyIHRoZSBHcmVhdA==',
    facts: [
      "I was a king of the ancient Greek kingdom of Macedon.",
      "By the age of thirty, I had created one of the largest empires in history, stretching from Greece to northwestern India.",
      "I was undefeated in battle and am considered one of history's most successful military commanders."
    ],
    hint: "Student of Aristotle, died in Babylon.",
    continent: 'Europe'
  },
  {
    id: 'eu-13',
    encryptedName: 'SnVsaXVzIENhZXNhcg==',
    facts: [
      "I was a Roman general and statesman who played a critical role in the demise of the Roman Republic and the rise of the Roman Empire.",
      "I conquered Gaul and crossed the Rubicon river, sparking a civil war.",
      "I was assassinated on the Ides of March."
    ],
    hint: "Et tu, Brute?",
    continent: 'Europe'
  },
  {
    id: 'eu-14',
    encryptedName: 'Sm9hbiBvZiBBcmM=',
    facts: [
      "I was a peasant girl living in medieval France who claimed divine guidance.",
      "I led the French army to victory over the English at Orléans during the Hundred Years' War.",
      "I was captured and burned at the stake at age 19, later canonized as a saint."
    ],
    hint: "The Maid of Orléans.",
    continent: 'Europe'
  },
  {
    id: 'eu-15',
    encryptedName: 'Q2hyaXN0b3BoZXIgQ29sdW1idXM=',
    facts: [
      "I was an Italian explorer and navigator who completed four voyages across the Atlantic Ocean.",
      "My expeditions initiated the permanent European colonization of the Americas.",
      "I was sponsored by the Catholic Monarchs of Spain, Ferdinand and Isabella."
    ],
    hint: "Sailed the Ocean Blue in 1492.",
    continent: 'Europe'
  },
  {
    id: 'eu-16',
    encryptedName: 'R2FsaWxlbyBHYWxpbGVp',
    facts: [
      "I was an Italian astronomer, physicist, and engineer, sometimes described as a polymath.",
      "I championed heliocentrism, which led to my trial by the Inquisition.",
      "I discovered the four largest moons of Jupiter."
    ],
    hint: "Father of modern observational astronomy.",
    continent: 'Europe'
  },
  {
    id: 'eu-17',
    encryptedName: 'VmluY2VudCB2YW4gR29naA==',
    facts: [
      "I was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art.",
      "I created about 2,100 artworks, including landscapes, still lifes, portraits, and self-portraits.",
      "I famously cut off part of my own ear."
    ],
    hint: "Painter of 'The Starry Night'.",
    continent: 'Europe'
  },
  {
    id: 'eu-18',
    encryptedName: 'U2lnbXVuZCBGcmV1ZA==',
    facts: [
      "I was an Austrian neurologist and the founder of psychoanalysis.",
      "I developed theories about the unconscious mind, dreams, and the Oedipus complex.",
      "I popularized the concept of the id, ego, and superego."
    ],
    hint: "Associated with the therapy couch.",
    continent: 'Europe'
  },
  {
    id: 'eu-19',
    encryptedName: 'UGxhdG8=',
    facts: [
      "I was an Athenian philosopher during the Classical period in Ancient Greece.",
      "I founded the Academy in Athens, the first institution of higher learning in the Western world.",
      "I was a student of Socrates and the teacher of Aristotle."
    ],
    hint: "Author of 'The Republic' and the Allegory of the Cave.",
    continent: 'Europe'
  },
  {
    id: 'eu-20',
    encryptedName: 'Q2hhcmxlbWFnbmU=',
    facts: [
      "I was King of the Franks, King of the Lombards, and Emperor of the Romans.",
      "I united much of western and central Europe during the Early Middle Ages.",
      "I am often called the 'Father of Europe'."
    ],
    hint: "First Holy Roman Emperor.",
    continent: 'Europe'
  },
  {
    id: 'eu-21',
    encryptedName: 'S2FybCBNYXJ4',
    facts: [
      "I was a German philosopher, economist, historian, sociologist, political theorist, journalist, and socialist revolutionary.",
      "My theories about society, economics, and politics are collectively understood as Marxism.",
      "I wrote 'The Communist Manifesto' and 'Das Kapital'."
    ],
    hint: "Workers of the world, unite!",
    continent: 'Europe'
  },
  {
    id: 'eu-22',
    encryptedName: 'THVkd2lnIHZhbiBCZWV0aG92ZW4=',
    facts: [
      "I was a German composer and pianist.",
      "I remained a crucial figure in the transition between the Classical and Romantic eras in classical music.",
      "I continued to compose, conduct, and perform even after becoming completely deaf."
    ],
    hint: "Composer of the 'Ode to Joy'.",
    continent: 'Europe'
  },
  {
    id: 'eu-23',
    encryptedName: 'TWljaGVsYW5nZWxv',
    facts: [
      "I was an Italian sculptor, painter, architect, and poet of the High Renaissance.",
      "I exerted an unparalleled influence on the development of Western art.",
      "I painted the scenes from Genesis on the ceiling of the Sistine Chapel."
    ],
    hint: "Sculptor of 'David' and 'Pieta'.",
    continent: 'Europe'
  },
  {
    id: 'eu-24',
    encryptedName: 'QXVndXN0dXM=',
    facts: [
      "I was the first Roman emperor, reigning from 27 BC until my death in AD 14.",
      "I founded the Roman Principate and initiated an era of relative peace known as the Pax Romana.",
      "I was the great-nephew and adopted son of Julius Caesar."
    ],
    hint: "Born Gaius Octavius.",
    continent: 'Europe'
  },
  {
    id: 'eu-25',
    encryptedName: 'TWFyY28gUG9xv',
    facts: [
      "I was a Venetian merchant, explorer, and writer.",
      "I travelled through Asia along the Silk Road between 1271 and 1295.",
      "My travels were recorded in a book that introduced Europeans to Central Asia and China."
    ],
    hint: "Served at the court of Kublai Khan.",
    continent: 'Europe'
  },
  {
    id: 'eu-26',
    encryptedName: 'Sm9oYW5uZXMgR3V0ZW5iZXJn',
    facts: [
      "I was a German inventor, printer, publisher, and goldsmith.",
      "I introduced printing to Europe with the movable-type printing press.",
      "My invention started the Printing Revolution and is regarded as a milestone of the second millennium."
    ],
    hint: "Famous for his 42-line Bible.",
    continent: 'Europe'
  },
  {
    id: 'eu-27',
    encryptedName: 'TWFydGluIEx1dGhlcg==',
    facts: [
      "I was a German professor of theology, composer, priest, monk, and a seminal figure in the Protestant Reformation.",
      "I rejected several teachings and practices of the Roman Catholic Church.",
      "I famously nailed my Ninety-five Theses to the door of the All Saints' Church in Wittenberg."
    ],
    hint: "Initiated the Lutheran church.",
    continent: 'Europe'
  },
  {
    id: 'eu-28',
    encryptedName: 'TG91aXMgWElW',
    facts: [
      "I was King of France from 1643 until my death in 1715.",
      "My reign of 72 years and 110 days is the longest recorded of any monarch of a sovereign country in history.",
      "I sought to eliminate the remnants of feudalism and built the Palace of Versailles."
    ],
    hint: "The Sun King.",
    continent: 'Europe'
  },
  {
    id: 'eu-29',
    encryptedName: 'Q2F0aGVyaW5lIHRoZSBHcmVhdA==',
    facts: [
      "I was the last reigning Empress Regnant of Russia from 1762 until 1796.",
      "The country was revitalized under my reign, growing larger and stronger.",
      "I came to power following a coup d'état that overthrew my husband, Peter III."
    ],
    hint: "Famous Russian Empress of German descent.",
    continent: 'Europe'
  },
  {
    id: 'eu-30',
    encryptedName: 'VmxhZGltaXIgTGVuaW4=',
    facts: [
      "I was a Russian revolutionary, politician, and political theorist.",
      "I served as the first and founding head of government of Soviet Russia and the Soviet Union.",
      "I led the Bolsheviks during the October Revolution."
    ],
    hint: "His preserved body is on display in Moscow.",
    continent: 'Europe'
  },

  // =================================================================
  // ASIA
  // =================================================================
  {
    id: 'as-1',
    encryptedName: 'R2VuZ2hpcyBLaGFu',
    facts: [
      "I was the founder and first Great Khan of the Mongol Empire.",
      "By uniting many of the nomadic tribes of Northeast Asia, I launched invasions that conquered most of Eurasia.",
      "My empire became the largest contiguous land empire in history."
    ],
    hint: "A legendary Mongol warrior-ruler.",
    continent: 'Asia'
  },
  {
    id: 'as-2',
    encryptedName: 'TWFoYXRtYSBHYW5kaGk=',
    facts: [
      "I was an Indian lawyer, anti-colonial nationalist, and political ethicist.",
      "I employed nonviolent resistance to lead the successful campaign for India's independence from British rule.",
      "My birthday, October 2nd, is celebrated as the International Day of Non-Violence."
    ],
    hint: "Wore a dhoti and shawl, spun his own cloth.",
    continent: 'Asia'
  },
  {
    id: 'as-3',
    encryptedName: 'Q29uZnVjaXVz',
    facts: [
      "I was a Chinese philosopher and politician of the Spring and Autumn period.",
      "My philosophy emphasized personal and governmental morality, correctness of social relationships, justice, and sincerity.",
      "My teachings became the foundation of a major system of thought in East Asia."
    ],
    hint: "Famous for his 'Analects'.",
    continent: 'Asia'
  },
  {
    id: 'as-4',
    encryptedName: 'TWFvIFplZG9uZw==',
    facts: [
      "I was a Chinese communist revolutionary who was the founder of the People's Republic of China.",
      "I ruled as the chairman of the Chinese Communist Party from 1949 until my death in 1976.",
      "I initiated the 'Great Leap Forward' and the 'Cultural Revolution'."
    ],
    hint: "The Chairman.",
    continent: 'Asia'
  },
  {
    id: 'as-5',
    encryptedName: 'UWluIFNoaSBIdWFuZw==',
    facts: [
      "I was the founder of the Qin dynasty and the first emperor of a unified China.",
      "I ordered the construction of the Terracotta Army to guard my tomb.",
      "I began the construction of the precursor to the Great Wall of China."
    ],
    hint: "First Emperor of China.",
    continent: 'Asia'
  },
  {
    id: 'as-6',
    encryptedName: 'UG9sIFBvdA==',
    facts: [
      "I was a Cambodian revolutionary and politician who governed Cambodia as the Prime Minister of Democratic Kampuchea.",
      "I led the Khmer Rouge regime which was responsible for the Cambodian genocide.",
      "My policies led to the death of around 25 percent of Cambodia's population."
    ],
    hint: "Brother Number One.",
    continent: 'Asia'
  },
  {
    id: 'as-7',
    encryptedName: 'SGlyb2hpdG8=',
    facts: [
      "I was the 124th Emperor of Japan.",
      "I reigned from 1926 to 1989, a period known as the Shōwa era.",
      "I was the head of state during Japan's involvement in World War II."
    ],
    hint: "Emperor Showa.",
    continent: 'Asia'
  },
  {
    id: 'as-8',
    encryptedName: 'QWtiYXIgdGhlIEdyZWF0',
    facts: [
      "I was the third Mughal emperor, who reigned from 1556 to 1605.",
      "I expanded the Mughal Empire to cover much of the Indian subcontinent.",
      "I was known for my policy of religious tolerance and created a syncretic religion called Din-i Ilahi."
    ],
    hint: "Greatest of the Mughal emperors.",
    continent: 'Asia'
  },
  {
    id: 'as-9',
    encryptedName: 'Q3lydXMgdGhlIEdyZWF0',
    facts: [
      "I was the founder of the Achaemenid Empire, the first Persian Empire.",
      "I am respected for my achievements in human rights, politics, and military strategy.",
      "I conquered the Median, Lydian, and Neo-Babylonian empires."
    ],
    hint: "King of Kings of Persia.",
    continent: 'Asia'
  },
  {
    id: 'as-10',
    encryptedName: 'U2FsYWRpbg==',
    facts: [
      "I was the first sultan of Egypt and Syria and the founder of the Ayyubid dynasty.",
      "I led the Muslim military campaign against the Crusader states in the Levant.",
      "I recaptured Jerusalem from the Crusaders in 1187."
    ],
    hint: "Respected rival of Richard the Lionheart.",
    continent: 'Asia'
  },
  {
    id: 'as-11',
    encryptedName: 'VGFtZXJsYW5l',
    facts: [
      "I was a Turco-Mongol conqueror who founded the Timurid Empire in and around modern-day Afghanistan, Iran, and Central Asia.",
      "I am considered the last of the great nomadic conquerors of the Eurasian Steppe.",
      "I sought to restore the Mongol Empire of Genghis Khan."
    ],
    hint: "Also known as Timur the Lame.",
    continent: 'Asia'
  },
  {
    id: 'as-12',
    encryptedName: 'U3VuIFlhdC1zZW4=',
    facts: [
      "I was a Chinese statesman, physician, and political philosopher.",
      "I served as the provisional first president of the Republic of China and the first leader of the Kuomintang.",
      "I am referred to as the 'Father of the Nation' in the Republic of China."
    ],
    hint: "Instrumental in overthrowing the Qing dynasty.",
    continent: 'Asia'
  },
  {
    id: 'as-13',
    encryptedName: 'SW5kaXJhIEdhbmRoaQ==',
    facts: [
      "I was an Indian politician and a central figure of the Indian National Congress.",
      "I was the first and, to date, only female Prime Minister of India.",
      "I was the daughter of Jawaharlal Nehru, not related to Mahatma Gandhi."
    ],
    hint: "The Iron Lady of India.",
    continent: 'Asia'
  },
  {
    id: 'as-14',
    encryptedName: 'SmF3YWhhcmxhbCBOZWhydQ==',
    facts: [
      "I was an Indian anti-colonial nationalist, secular humanist, social democrat, and author.",
      "I served as India's first Prime Minister following independence in 1947.",
      "I was a central figure in Indian politics for the middle third of the 20th century."
    ],
    hint: "Panditji.",
    continent: 'Asia'
  },
  {
    id: 'as-15',
    encryptedName: 'SG8gQ2hpIE1pbmg=',
    facts: [
      "I was a Vietnamese revolutionary and politician.",
      "I served as Prime Minister and President of North Vietnam.",
      "I led the independence movement against French colonial rule."
    ],
    hint: "Uncle Ho.",
    continent: 'Asia'
  },
  {
    id: 'as-16',
    encryptedName: 'TGVlIEt1YW4gWWV3',
    facts: [
      "I was a Singaporean statesman and barrister who served as the first Prime Minister of Singapore.",
      "I governed for three decades and am recognized as the nation's founding father.",
      "I transformed Singapore from a third-world country to a first-world nation."
    ],
    hint: "LKY.",
    continent: 'Asia'
  },
  {
    id: 'as-17',
    encryptedName: 'QXZpY2VubmE=',
    facts: [
      "I was a Persian polymath who is regarded as one of the most significant physicians, astronomers, thinkers and writers of the Islamic Golden Age.",
      "I wrote 'The Canon of Medicine', which was a standard medical text for centuries.",
      "I am also known as Ibn Sina."
    ],
    hint: "Father of early modern medicine.",
    continent: 'Asia'
  },
  {
    id: 'as-18',
    encryptedName: 'UnVtaQ==',
    facts: [
      "I was a 13th-century Persian poet, faqih, Islamic scholar, theologian, and Sufi mystic.",
      "My poems have been widely translated into many of the world's languages.",
      "I am the best-selling poet in the United States."
    ],
    hint: "Mevlana.",
    continent: 'Asia'
  },
  {
    id: 'as-19',
    encryptedName: 'T2RhIE5vYnVuYWdh',
    facts: [
      "I was a powerful daimyō of Japan in the late 16th century.",
      "I attempted to unify Japan during the late Sengoku period.",
      "I was the first of the 'Three Great Unifiers' of Japan."
    ],
    hint: "Betrayed at Honnō-ji.",
    continent: 'Asia'
  },
  {
    id: 'as-20',
    encryptedName: 'TWl5YW1vdG8gTXVzYXNoaQ==',
    facts: [
      "I was a Japanese swordsman, philosopher, strategist, writer and rōnin.",
      "I became renowned through stories of my unique double-bladed swordsmanship and undefeated record in 61 duels.",
      "I wrote 'The Book of Five Rings'."
    ],
    hint: "Japan's greatest swordsman.",
    continent: 'Asia'
  },
  {
    id: 'as-21',
    encryptedName: 'V3UgWmV0aWFu',
    facts: [
      "I was the only female emperor in the history of China.",
      "I ruled during the Tang dynasty and founded my own Zhou dynasty.",
      "I expanded the Chinese empire deep into Central Asia."
    ],
    hint: "Empress Wu.",
    continent: 'Asia'
  },
  {
    id: 'as-22',
    encryptedName: 'QXVyYW5nemVi',
    facts: [
      "I was the sixth Mughal emperor, who ruled over almost the entire Indian subcontinent for a period of 49 years.",
      "I was a notable expansionist and during my reign, the Mughal Empire reached its greatest extent.",
      "I was known for my religious piety and orthodoxy."
    ],
    hint: "Son of Shah Jahan, who built the Taj Mahal.",
    continent: 'Asia'
  },
  {
    id: 'as-23',
    encryptedName: 'QXNob2th',
    facts: [
      "I was an Indian emperor of the Maurya Dynasty.",
      "After a bloody war in Kalinga, I converted to Buddhism and promoted non-violence.",
      "I left behind a series of edicts inscribed on pillars and rocks throughout India."
    ],
    hint: "Ashoka the Great.",
    continent: 'Asia'
  },
  {
    id: 'as-24',
    encryptedName: 'VG9rdWdhd2EgSWV5YXN1',
    facts: [
      "I was the founder and first shōgun of the Tokugawa shogunate of Japan.",
      "My dynasty ruled Japan from the Battle of Sekigahara in 1600 until the Meiji Restoration in 1868.",
      "I completed the unification of Japan."
    ],
    hint: "The third Great Unifier.",
    continent: 'Asia'
  },
  {
    id: 'as-25',
    encryptedName: 'Sm9zZSBSaXphbA==',
    facts: [
      "I was a Filipino nationalist and polymath during the tail end of the Spanish colonial period of the Philippines.",
      "I was an ophthalmologist by profession but became a writer and a key member of the Filipino Propaganda Movement.",
      "I was executed by the Spanish colonial government for the crime of rebellion."
    ],
    hint: "National hero of the Philippines.",
    continent: 'Asia'
  },
  {
    id: 'as-26',
    encryptedName: 'U3VrYXJubw==',
    facts: [
      "I was the first president of Indonesia, serving from 1945 to 1967.",
      "I was the leader of the Indonesian struggle for independence from the Dutch Empire.",
      "I formulated the Pancasila, the philosophical foundation of the Indonesian state."
    ],
    hint: "Kusno Sosrodihardjo.",
    continent: 'Asia'
  },
  {
    id: 'as-27',
    encryptedName: 'QXVuZyBTYW4=',
    facts: [
      "I was a Burmese politician, independence activist and revolutionary.",
      "I founded the Myanmar Armed Forces and is considered the Father of the Nation of modern-day Myanmar.",
      "I was assassinated six months before independence."
    ],
    hint: "Bogyoke.",
    continent: 'Asia'
  },
  {
    id: 'as-28',
    encryptedName: 'Qmh1bWlib2wgQWR1bHlhZGVq',
    facts: [
      "I was King of Thailand from 1946 until my death in 2016.",
      "I was the ninth monarch of Thailand from the Chakri dynasty, titled Rama IX.",
      "At the time of my death, I was the world's longest-serving head of state."
    ],
    hint: "Highly revered Thai King.",
    continent: 'Asia'
  },
  {
    id: 'as-29',
    encryptedName: 'U2Vqb25nIHRoZSBHcmVhdA==',
    facts: [
      "I was the fourth king of the Joseon dynasty of Korea.",
      "I reinforced Confucian policies and executed major legal amendments.",
      "I personally created Hangul, the Korean alphabet, to help common people read and write."
    ],
    hint: "Featured on the 10,000 won bill.",
    continent: 'Asia'
  },
  {
    id: 'as-30',
    encryptedName: 'RW1wcmVzcyBEb3dhZ2VyIENpeGk=',
    facts: [
      "I was a Chinese noblewoman of the Manchu Yehenara clan.",
      "I effectively controlled the Chinese government in the late Qing dynasty for 47 years.",
      "I initially supported the Boxer Rebellion against foreign powers."
    ],
    hint: "The Dragon Lady.",
    continent: 'Asia'
  },

  // =================================================================
  // AFRICA
  // =================================================================
  {
    id: 'af-1',
    encryptedName: 'Q2xlb3BhdHJh',
    facts: [
      "I was the last active ruler of the Ptolemaic Kingdom of Egypt.",
      "I was known for my intelligence and formed political alliances with powerful Roman leaders.",
      "My life and death have been romanticized in numerous plays and movies involving Julius Caesar and Mark Antony."
    ],
    hint: "An Egyptian queen famous for her beauty and the asp.",
    continent: 'Africa'
  },
  {
    id: 'af-2',
    encryptedName: 'TmVsc29uIE1hbmRlbGE=',
    facts: [
      "I was a South African anti-apartheid revolutionary and political leader.",
      "I spent 27 years in prison before being released in 1990.",
      "I became the first black head of state of my country, elected in a fully representative democratic election."
    ],
    hint: "Madiba.",
    continent: 'Africa'
  },
  {
    id: 'af-3',
    encryptedName: 'SGFpbGUgU2VsYXNzaWU=',
    facts: [
      "I was Emperor of Ethiopia from 1930 to 1974.",
      "I am a defining figure in modern Ethiopian history and the Rastafari movement reveres me as the returned messiah.",
      "I delivered a famous speech to the League of Nations in 1936 condemning Italian aggression."
    ],
    hint: "Ras Tafari.",
    continent: 'Africa'
  },
  {
    id: 'af-4',
    encryptedName: 'S3dhbWUgTmtydW1haA==',
    facts: [
      "I was a Ghanaian politician and revolutionary.",
      "I was the first Prime Minister and President of Ghana, having led the Gold Coast to independence from Britain in 1957.",
      "I was an influential advocate of Pan-Africanism."
    ],
    hint: "First leader of independent Ghana.",
    continent: 'Africa'
  },
  {
    id: 'af-5',
    encryptedName: 'Sm9tbyBLZW55YXR0YQ==',
    facts: [
      "I was an anti-colonial activist and politician who governed Kenya as its Prime Minister and then as its first President.",
      "I was the country's first indigenous head of government and played a significant role in the transformation of Kenya from a colony to an independent republic.",
      "I was imprisoned for my alleged role in the Mau Mau uprising."
    ],
    hint: "Father of the Nation in Kenya.",
    continent: 'Africa'
  },
  {
    id: 'af-6',
    encryptedName: 'U2hha2EgWnVsdQ==',
    facts: [
      "I was the founder of the Zulu Empire in Southern Africa.",
      "I am credited with military innovations such as the 'buffalo horns' formation.",
      "I reorganized the Zulu military into a formidable force."
    ],
    hint: "Legendary Zulu King.",
    continent: 'Africa'
  },
  {
    id: 'af-7',
    encryptedName: 'TWFuc2EgTXVzYQ==',
    facts: [
      "I was the tenth Mansa (emperor) of the Mali Empire.",
      "I am often described as the wealthiest individual of the Middle Ages.",
      "My pilgrimage to Mecca in 1324 was legendary for the amount of gold I distributed along the way."
    ],
    hint: "The Golden King of Mali.",
    continent: 'Africa'
  },
  {
    id: 'af-8',
    encryptedName: 'SGF0c2hlcHN1dA==',
    facts: [
      "I was the fifth pharaoh of the Eighteenth Dynasty of Egypt.",
      "I was the second historically confirmed female pharaoh.",
      "I established trade networks and commissioned hundreds of construction projects."
    ],
    hint: "The Woman Pharaoh who wore a fake beard.",
    continent: 'Africa'
  },
  {
    id: 'af-9',
    encryptedName: 'VHV0YW5raGFtdW4=',
    facts: [
      "I was an ancient Egyptian pharaoh who was the last of his royal family to rule during the end of the 18th Dynasty.",
      "I took the throne at eight or nine years of age.",
      "My tomb was discovered nearly intact by Howard Carter in 1922."
    ],
    hint: "King Tut.",
    continent: 'Africa'
  },
  {
    id: 'af-10',
    encryptedName: 'UmFtZXNzZXMgSUk=',
    facts: [
      "I was the third pharaoh of the Nineteenth Dynasty of Egypt.",
      "I am often regarded as the greatest, most celebrated, and most powerful pharaoh of the New Kingdom.",
      "I led several military expeditions into the Levant and reasserted Egyptian control over Canaan."
    ],
    hint: "Ozymandias.",
    continent: 'Africa'
  },
  {
    id: 'af-11',
    encryptedName: 'SGFubmliYWwgQmFyY2E=',
    facts: [
      "I was a Carthaginian general and statesman.",
      "I am considered one of the greatest military commanders in history.",
      "I famously crossed the Alps with war elephants to attack Rome."
    ],
    hint: "Scourge of Rome.",
    continent: 'Africa'
  },
  {
    id: 'af-12',
    encryptedName: 'UGF0cmljZSBMdW11bWJh',
    facts: [
      "I was a Congolese politician and independence leader.",
      "I served as the first Prime Minister of the independent Democratic Republic of the Congo.",
      "I was executed by firing squad in 1961 with the assistance of foreign intelligence agencies."
    ],
    hint: "Icon of Congolese independence.",
    continent: 'Africa'
  },
  {
    id: 'af-13',
    encryptedName: 'VGhvbWFzIFNhbmthcmE=',
    facts: [
      "I was a Burkinabé military officer, Marxist revolutionary, and Pan-Africanist President of Burkina Faso.",
      "I was often called 'Africa's Che Guevara'.",
      "I renamed my country from Upper Volta to Burkina Faso ('Land of Incorruptible People')."
    ],
    hint: "Assassinated revolutionary leader.",
    continent: 'Africa'
  },
  {
    id: 'af-14',
    encryptedName: 'S29maSBBbm5hbg==',
    facts: [
      "I was a Ghanaian diplomat who served as the seventh Secretary-General of the United Nations.",
      "I was the co-recipient of the 2001 Nobel Peace Prize.",
      "I founded the Kofi Annan Foundation to promote better global governance."
    ],
    hint: "Famous UN Secretary-General.",
    continent: 'Africa'
  },
  {
    id: 'af-15',
    encryptedName: 'RGVzbW9uZCBUdXR1',
    facts: [
      "I was a South African Anglican bishop and theologian.",
      "I was known for my work as an anti-apartheid and human rights activist.",
      "I chaired the Truth and Reconciliation Commission."
    ],
    hint: "The Arch.",
    continent: 'Africa'
  },
  {
    id: 'af-16',
    encryptedName: 'R2FtYWwgQWJkZWwgTmFzc2Vy',
    facts: [
      "I was an Egyptian politician who served as the second President of Egypt.",
      "I led the 1952 Egyptian Revolution and introduced far-reaching land reforms.",
      "I nationalized the Suez Canal Company, leading to the Suez Crisis."
    ],
    hint: "Champion of Arab nationalism.",
    continent: 'Africa'
  },
  {
    id: 'af-17',
    encryptedName: 'QW53YXIgU2FkYXQ=',
    facts: [
      "I was the third President of Egypt.",
      "I signed the Camp David Accords with Israeli Prime Minister Menachem Begin.",
      "I was assassinated during a victory parade in Cairo."
    ],
    hint: "Nobel Peace Prize winner from Egypt.",
    continent: 'Africa'
  },
  {
    id: 'af-18',
    encryptedName: 'TXVhbW1FyIEdhZGRhZmk=',
    facts: [
      "I was a Libyan revolutionary, politician, and political theorist.",
      "I governed Libya as Revolutionary Chairman and Brotherly Leader from 1969 to 2011.",
      "I wrote 'The Green Book'."
    ],
    hint: "Deposed during the Arab Spring.",
    continent: 'Africa'
  },
  {
    id: 'af-19',
    encryptedName: 'SWJuIEJhdHR1dGE=',
    facts: [
      "I was a Moroccan Muslim scholar and traveler.",
      "Over a period of thirty years, I visited most of the Islamic world and many non-Muslim lands.",
      "My journeys covered a distance that surpassed that of Marco Polo."
    ],
    hint: "The greatest traveler of the pre-modern world.",
    continent: 'Africa'
  },
  {
    id: 'af-20',
    encryptedName: 'V2FuZ2FyaSBNYWF0aGFp',
    facts: [
      "I was a Kenyan social, environmental and political activist.",
      "I founded the Green Belt Movement, an environmental non-governmental organization focused on the planting of trees.",
      "I was the first African woman to win the Nobel Peace Prize."
    ],
    hint: "Tree mother of Africa.",
    continent: 'Africa'
  },
  {
    id: 'af-21',
    encryptedName: 'TGVvcG9sZCBTZW5naG9y',
    facts: [
      "I was a Senegalese poet, politician, and cultural theorist.",
      "I served as the first president of Senegal.",
      "I was one of the founders of the Négritude movement."
    ],
    hint: "Poet-President.",
    continent: 'Africa'
  },
  {
    id: 'af-22',
    encryptedName: 'SnVsaXVzIE55ZXJlcmU=',
    facts: [
      "I was a Tanzanian anti-colonial activist, politician, and political theorist.",
      "I served as the first President of Tanzania.",
      "I was known by the Swahili honorific 'Mwalimu' or 'Teacher'."
    ],
    hint: "Promoter of Ujamaa.",
    continent: 'Africa'
  },
  {
    id: 'af-23',
    encryptedName: 'TW9idXR1IFNlc2UgU2Vrbw==',
    facts: [
      "I was a Congolese military officer and politician who was the President of Zaire.",
      "I formed an authoritarian regime, amassed vast personal wealth, and attempted to purge the country of all colonial cultural influence.",
      "I wore a signature leopard-skin toque."
    ],
    hint: "Dictator of Zaire.",
    continent: 'Africa'
  },
  {
    id: 'af-24',
    encryptedName: 'Um9iZXJ0IE11Z2FiZQ==',
    facts: [
      "I was a Zimbabwean revolutionary and politician who served as Prime Minister and then President.",
      "I was a leader of the ZANU–PF party.",
      "My rule was characterized by controversial land reforms and economic collapse."
    ],
    hint: "Leader of Zimbabwe for nearly 40 years.",
    continent: 'Africa'
  },
  {
    id: 'af-25',
    encryptedName: 'U3RldmUgQmlrbw==',
    facts: [
      "I was a South African anti-apartheid activist.",
      "I was at the forefront of the Black Consciousness Movement during the late 1960s and 1970s.",
      "I died in police custody, becoming a martyr of the anti-apartheid movement."
    ],
    hint: "Black Consciousness leader.",
    continent: 'Africa'
  },
  {
    id: 'af-26',
    encryptedName: 'RWxsZW4gSm9obnNvbiBTaXJsZWFm',
    facts: [
      "I served as the 24th President of Liberia from 2006 to 2018.",
      "I was the first elected female head of state in Africa.",
      "I was awarded the Nobel Peace Prize in 2011."
    ],
    hint: "Ma Ellen.",
    continent: 'Africa'
  },
  {
    id: 'af-27',
    encryptedName: 'QWtoZW5hdGVu',
    facts: [
      "I was an ancient Egyptian pharaoh of the 18th Dynasty.",
      "I abandoned traditional Egyptian polytheism and introduced the worship of the Aten, the sun disk.",
      "I was the husband of Nefertiti and father of Tutankhamun."
    ],
    hint: "The Heretic Pharaoh.",
    continent: 'Africa'
  },
  {
    id: 'af-28',
    encryptedName: 'TmVmZXJ0aXRp',
    facts: [
      "I was a queen of the 18th Dynasty of Ancient Egypt, the Great Royal Wife of Pharaoh Akhenaten.",
      "I worshipped the sun disk Aten alongside my husband.",
      "I am famous for a limestone bust found in Amarna."
    ],
    hint: "Her name means 'The Beautiful Woman has Come'.",
    continent: 'Africa'
  },
  {
    id: 'af-29',
    encryptedName: 'U2VwdGltaXVzIFNldmVydXM=',
    facts: [
      "I was a Roman emperor born in Leptis Magna, in present-day Libya.",
      "I seized power after the death of Emperor Pertinax.",
      "I founded the Severan dynasty."
    ],
    hint: "The African Emperor of Rome.",
    continent: 'Africa'
  },
  {
    id: 'af-30',
    encryptedName: 'VGFyaXEgaWJuIFapeWFk',
    facts: [
      "I was an Umayyad commander who initiated the Muslim conquest of Visigothic Hispania.",
      "I led a large army across the strait separating Africa from Europe.",
      "The Rock of Gibraltar is named after me."
    ],
    hint: "Jabal Tariq.",
    continent: 'Africa'
  },

  // =================================================================
  // NORTH AMERICA
  // =================================================================
  {
    id: 'na-1',
    encryptedName: 'QW1lbGlhIEVhcmhhcnQ=',
    facts: [
      "I was an American aviation pioneer and author.",
      "I was the first female aviator to fly solo across the Atlantic Ocean.",
      "I disappeared with navigator Fred Noonan over the central Pacific Ocean in 1937."
    ],
    hint: "A famous lost pilot.",
    continent: 'North America'
  },
  {
    id: 'na-2',
    encryptedName: 'TWFydGluIEx1dGhlciBLaW5nIEpy',
    facts: [
      "I was an American Baptist minister and activist who became the most visible spokesperson for the civil rights movement.",
      "I advanced civil rights through nonviolence and civil disobedience.",
      "I delivered the famous 'I Have a Dream' speech in 1963."
    ],
    hint: "Celebrated on the third Monday of January in the US.",
    continent: 'North America'
  },
  {
    id: 'na-3',
    encryptedName: 'RnJpZGEgS2FobG8=',
    facts: [
      "I was a Mexican painter known for my many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico.",
      "I employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race.",
      "I was married to fellow artist Diego Rivera."
    ],
    hint: "Known for her unibrow and colorful attire.",
    continent: 'North America'
  },
  {
    id: 'na-4',
    encryptedName: 'QWJyYWhhbSBMaW5jb2xu',
    facts: [
      "I was a self-educated lawyer who became the 16th President of the United States.",
      "I led the nation through its greatest moral, constitutional, and political crisis: the Civil War.",
      "I issued the Emancipation Proclamation and was assassinated at Ford's Theatre."
    ],
    hint: "Tall hat, beard, on the $5 bill.",
    continent: 'North America'
  },
  {
    id: 'na-5',
    encryptedName: 'R2VvcmdlIFdhc2hpbmd0b24=',
    facts: [
      "I was an American political leader, military general, statesman, and founding father.",
      "I served as the first president of the United States from 1789 to 1797.",
      "I led the Patriot forces to victory in the nation's War for Independence."
    ],
    hint: "Father of his Country.",
    continent: 'North America'
  },
  {
    id: 'na-6',
    encryptedName: 'VGhvbWFzIEplZmZlcnNvbg==',
    facts: [
      "I was an American statesman, diplomat, lawyer, architect, and philosopher.",
      "I served as the third president of the United States.",
      "I was the principal author of the Declaration of Independence."
    ],
    hint: "Face on the $2 bill and nickel.",
    continent: 'North America'
  },
  {
    id: 'na-7',
    encryptedName: 'VGhlb2RvcmUgUm9vc2V2ZWx0',
    facts: [
      "I was an American politician, statesman, soldier, conservationist, and naturalist.",
      "I served as the 26th president of the United States.",
      "I established many national parks and forests."
    ],
    hint: "Teddy.",
    continent: 'North America'
  },
  {
    id: 'na-8',
    encryptedName: 'RnJhbmtsaW4gRC4gUm9vc2V2ZWx0',
    facts: [
      "I served as the 32nd president of the United States.",
      "I was the only president elected to the office four times.",
      "I led the United States through the Great Depression and World War II."
    ],
    hint: "FDR.",
    continent: 'North America'
  },
  {
    id: 'na-9',
    encryptedName: 'SGFycmlldCBUdWJtYW4=',
    facts: [
      "I was an American abolitionist and political activist.",
      "Born into slavery, I escaped and subsequently made some 13 missions to rescue approximately 70 enslaved people.",
      "I used the network of antislavery activists and safe houses known as the Underground Railroad."
    ],
    hint: "Moses of her people.",
    continent: 'North America'
  },
  {
    id: 'na-10',
    encryptedName: 'Um9zYSBQYXJrcw==',
    facts: [
      "I was an American activist in the civil rights movement.",
      "I am best known for my pivotal role in the Montgomery bus boycott.",
      "I refused to give up my seat to a white passenger on a colored section of a bus."
    ],
    hint: "The first lady of civil rights.",
    continent: 'North America'
  },
  {
    id: 'na-11',
    encryptedName: 'TWFsY29sbSBY',
    facts: [
      "I was an African-American Muslim minister and human rights activist.",
      "I was a prominent figure in the Nation of Islam before breaking away.",
      "I was assassinated in 1965."
    ],
    hint: "Born Malcolm Little.",
    continent: 'North America'
  },
  {
    id: 'na-12',
    encryptedName: 'TWFyayBUd2Fpbg==',
    facts: [
      "I was an American writer, humorist, entrepreneur, publisher, and lecturer.",
      "I have been lauded as the 'greatest humorist the United States has produced'.",
      "I wrote 'The Adventures of Tom Sawyer' and 'Adventures of Huckleberry Finn'."
    ],
    hint: "Born Samuel Clemens.",
    continent: 'North America'
  },
  {
    id: 'na-13',
    encryptedName: 'VGhvbWFzIEVkaXNvbg==',
    facts: [
      "I was an American inventor and businessman.",
      "I developed many devices in fields such as electric power generation and sound recording.",
      "I am credited with developing the practical electric light bulb."
    ],
    hint: "The Wizard of Menlo Park.",
    continent: 'North America'
  },
  {
    id: 'na-14',
    encryptedName: 'V3JpZ2h0IEJyb3RoZXJz',
    facts: [
      "We were two American aviation pioneers.",
      "We are generally credited with inventing, building, and flying the world's first successful motor-operated airplane.",
      "Our first flight took place at Kitty Hawk, North Carolina."
    ],
    hint: "Orville and Wilbur.",
    continent: 'North America'
  },
  {
    id: 'na-15',
    encryptedName: 'SGVucnkgRm9yZA==',
    facts: [
      "I was an American industrialist and business magnate.",
      "I founded the Ford Motor Company.",
      "I sponsored the development of the assembly line technique of mass production."
    ],
    hint: "Model T.",
    continent: 'North America'
  },
  {
    id: 'na-16',
    encryptedName: 'V2FsdCBEaXNuZXk=',
    facts: [
      "I was an American entrepreneur, animator, writer, voice actor, and film producer.",
      "I held the record for most Academy Awards earned by an individual.",
      "I created the character Mickey Mouse."
    ],
    hint: "Founder of the happiest place on Earth.",
    continent: 'North America'
  },
  {
    id: 'na-17',
    encryptedName: 'RWx2aXMgUHJlc2xleQ==',
    facts: [
      "I was an American singer and actor.",
      "I am regarded as one of the most significant cultural icons of the 20th century.",
      "I am often referred to as the 'King of Rock and Roll'."
    ],
    hint: "The King.",
    continent: 'North America'
  },
  {
    id: 'na-18',
    encryptedName: 'TmVpbCBBcm1zdHJvbmc=',
    facts: [
      "I was an American astronaut and aeronautical engineer.",
      "I was the first person to walk on the Moon.",
      "I said, 'That's one small step for man, one giant leap for mankind.'"
    ],
    hint: "Commander of Apollo 11.",
    continent: 'North America'
  },
  {
    id: 'na-19',
    encryptedName: 'QmVuamFtaW4gRnJhbmtsaW4=',
    facts: [
      "I was an American polymath and one of the Founding Fathers of the United States.",
      "I was a writer, scientist, inventor, statesman, diplomat, printer, and political philosopher.",
      "I invented the lightning rod and bifocals."
    ],
    hint: "Face on the $100 bill.",
    continent: 'North America'
  },
  {
    id: 'na-20',
    encryptedName: 'U2l0dGluZyBCdWxs',
    facts: [
      "I was a Hunkpapa Lakota leader who led his people during years of resistance against United States government policies.",
      "I defeated Custer's 7th Cavalry at the Battle of the Little Bighorn.",
      "I traveled for a time with Buffalo Bill's Wild West show."
    ],
    hint: "Tatanka Iyotake.",
    continent: 'North America'
  },
  {
    id: 'na-21',
    encryptedName: 'R2Vyb25pbW8=',
    facts: [
      "I was a prominent leader and medicine man from the Bedonkohe band of the Apache.",
      "I fought against Mexico and Texas for their expansion into Apache tribal lands.",
      "My name is often shouted by people jumping from great heights."
    ],
    hint: "Famous Apache leader.",
    continent: 'North America'
  },
  {
    id: 'na-22',
    encryptedName: 'UG9jYWhvbnRhcw==',
    facts: [
      "I was a Native American woman notable for my association with the colonial settlement at Jamestown, Virginia.",
      "I was the daughter of Powhatan, the paramount chief.",
      "I allegedly saved the life of Englishman John Smith."
    ],
    hint: "Married John Rolfe.",
    continent: 'North America'
  },
  {
    id: 'na-23',
    encryptedName: 'U2FjYWdhd2Vh',
    facts: [
      "I was a Lemhi Shoshone woman who helped the Lewis and Clark Expedition.",
      "I traveled thousands of miles from North Dakota to the Pacific Ocean.",
      "I served as an interpreter and guide."
    ],
    hint: "Featured on the US dollar coin.",
    continent: 'North America'
  },
  {
    id: 'na-24',
    encryptedName: 'UGFuY2hvIFZpbGxh',
    facts: [
      "I was a Mexican revolutionary general and one of the most prominent figures of the Mexican Revolution.",
      "I commanded the Division of the North.",
      "I led a raid on Columbus, New Mexico, which provoked a US military expedition."
    ],
    hint: "Mexican Robin Hood.",
    continent: 'North America'
  },
  {
    id: 'na-25',
    encryptedName: 'RW1pbGlhbm8gWmFwYXRh',
    facts: [
      "I was a leading figure in the Mexican Revolution.",
      "I formed and commanded the Liberation Army of the South.",
      "My followers were known as Zapatistas."
    ],
    hint: "Tierra y Libertad.",
    continent: 'North America'
  },
  {
    id: 'na-26',
    encryptedName: 'TW9udGV6dW1hIElJ',
    facts: [
      "I was the ninth Tlatoani or ruler of Tenochtitlan.",
      "During my reign, the Aztec Empire reached its greatest size.",
      "I was killed during the initial stages of the Spanish conquest of the Aztec Empire."
    ],
    hint: "Aztec Emperor who met Cortes.",
    continent: 'North America'
  },
  {
    id: 'na-27',
    encryptedName: 'QmVuaXRvIEp1YXJZXo=',
    facts: [
      "I was a Mexican lawyer and liberal politician of Zapotec origin from Oaxaca.",
      "I served as the president of Mexico for five terms.",
      "I resisted the French occupation of Mexico."
    ],
    hint: "National hero of Mexico.",
    continent: 'North America'
  },
  {
    id: 'na-28',
    encryptedName: 'RmlkZWwgQ2FzdHJv',
    facts: [
      "I was a Cuban revolutionary and politician.",
      "I served as the Prime Minister and then President of Cuba from 1959 to 2008.",
      "I converted Cuba into a one-party communist state."
    ],
    hint: "Bearded Cuban leader.",
    continent: 'North America'
  },
  {
    id: 'na-29',
    encryptedName: 'VG91c3NhaW50IExvdXZlcnR1cmU=',
    facts: [
      "I was a Haitian general and the most prominent leader of the Haitian Revolution.",
      "I fought for the abolition of slavery and against French colonial rule.",
      "I died in a prison in France."
    ],
    hint: "The Black Napoleon.",
    continent: 'North America'
  },
  {
    id: 'na-30',
    encryptedName: 'Sm9obiBGLiBLZW5uZWR5',
    facts: [
      "I was an American politician who served as the 35th president of the United States.",
      "I served at the height of the Cold War, and the majority of my work concerned relations with the Soviet Union and Cuba.",
      "I was assassinated in Dallas, Texas, in 1963."
    ],
    hint: "JFK.",
    continent: 'North America'
  },

  // =================================================================
  // SOUTH AMERICA
  // =================================================================
  {
    id: 'sa-1',
    encryptedName: 'U2ltb24gQm9saXZhcg==',
    facts: [
      "I was a Venezuelan military and political leader.",
      "I led what are currently the countries of Venezuela, Bolivia, Colombia, Ecuador, Peru, and Panama to independence from the Spanish Empire.",
      "I served as president of Gran Colombia."
    ],
    hint: "The Liberator (El Libertador).",
    continent: 'South America'
  },
  {
    id: 'sa-2',
    encryptedName: 'Q2hlIEd1ZXZhcmE=',
    facts: [
      "I was an Argentine Marxist revolutionary, physician, author, guerrilla leader, diplomat, and military theorist.",
      "I was a major figure of the Cuban Revolution.",
      "My stylized visage has become a ubiquitous countercultural symbol of rebellion."
    ],
    hint: "El Che.",
    continent: 'South America'
  },
  {
    id: 'sa-3',
    encryptedName: 'RXZhIFBlcm9u',
    facts: [
      "I was an Argentine politician, activist, actress, and philanthropist.",
      "I served as the First Lady of Argentina from 1946 until my death in 1952.",
      "I was idolized by the working class 'descamisados' (shirtless ones)."
    ],
    hint: "Evita.",
    continent: 'South America'
  },
  {
    id: 'sa-4',
    encryptedName: 'Sm9zZSBkZSBTYW4gTWFydGlu',
    facts: [
      "I was an Argentine general and the prime leader of the southern part of South America's successful struggle for independence.",
      "I led the Crossing of the Andes to liberate Chile.",
      "I am regarded as a national hero of Argentina and Peru."
    ],
    hint: "Protector of Peru.",
    continent: 'South America'
  },
  {
    id: 'sa-5',
    encryptedName: 'UGVsZQ==',
    facts: [
      "I was a Brazilian professional footballer who played as a forward.",
      "I am regarded as one of the greatest players of all time.",
      "I am the only player to win three FIFA World Cups."
    ],
    hint: "The King of Football.",
    continent: 'South America'
  },
  {
    id: 'sa-6',
    encryptedName: 'QXRhaHVhbHBh',
    facts: [
      "I was the last Inca Emperor.",
      "I became emperor after defeating my half-brother Huáscar in a civil war.",
      "I was captured and executed by Francisco Pizarro."
    ],
    hint: "Last Sapa Inca.",
    continent: 'South America'
  },
  {
    id: 'sa-7',
    encryptedName: 'UGFjaGFjdXRp',
    facts: [
      "I was the ninth Sapa Inca of the Kingdom of Cusco.",
      "I transformed the Kingdom of Cusco into the Inca Empire.",
      "Machu Picchu is believed to have been built as my estate."
    ],
    hint: "The Earth Shaker.",
    continent: 'South America'
  },
  {
    id: 'sa-8',
    encryptedName: 'QmVybmFyZG8gT0hpZ2dpbnM=',
    facts: [
      "I was a Chilean independence leader.",
      "I freed Chile from Spanish rule in the Chilean War of Independence.",
      "I was a wealthy landowner of Spanish and Irish descent."
    ],
    hint: "Supreme Director of Chile.",
    continent: 'South America'
  },
  {
    id: 'sa-9',
    encryptedName: 'RG9tIFBlZHJvIElJ',
    facts: [
      "I was the second and last monarch of the Empire of Brazil.",
      "I reigned for over 58 years.",
      "I was known as 'The Magnanimous' and oversaw a period of stability and progress."
    ],
    hint: "Last Emperor of Brazil.",
    continent: 'South America'
  },
  {
    id: 'sa-10',
    encryptedName: 'T3NjYXIgTmllbWV5ZXI=',
    facts: [
      "I was a Brazilian architect considered to be one of the key figures in the development of modern architecture.",
      "I is best known for my design of civic buildings for Brasília.",
      "I explored the aesthetic possibilities of reinforced concrete."
    ],
    hint: "Architect of Brasilia.",
    continent: 'South America'
  },
  {
    id: 'sa-11',
    encryptedName: 'R2V0dWxpbyBWYXJnYXM=',
    facts: [
      "I was a Brazilian lawyer and politician who served as President of Brazil for two periods.",
      "I transformed Brazil from an agricultural-based economy into an industrial powerhouse.",
      "I committed suicide in office."
    ],
    hint: "Father of the Poor.",
    continent: 'South America'
  },
  {
    id: 'sa-12',
    encryptedName: 'U2FsdmFkb3IgQWxsZW5kZQ==',
    facts: [
      "I was a Chilean physician and politician.",
      "I was the first Marxist to become president of a Latin American country through open elections.",
      "I died during the 1973 military coup led by Augusto Pinochet."
    ],
    hint: "Socialist President of Chile.",
    continent: 'South America'
  },
  {
    id: 'sa-13',
    encryptedName: 'QXVndXN0byBQaW5vY2hldA==',
    facts: [
      "I was a Chilean general, politician and dictator.",
      "I ruled Chile from 1973 to 1990.",
      "My regime was characterized by the systematic suppression of political opposition."
    ],
    hint: "Overthrew Allende.",
    continent: 'South America'
  },
  {
    id: 'sa-14',
    encryptedName: 'SHVnbyBDaGF2ZXo=',
    facts: [
      "I was a Venezuelan politician who was president of Venezuela from 1999 until my death in 2013.",
      "I founded the Fifth Republic Movement and led the Bolivarian Revolution.",
      "I was a prominent critic of United States foreign policy."
    ],
    hint: "Red beret.",
    continent: 'South America'
  },
  {
    id: 'sa-15',
    encryptedName: 'SnVhbiBQZXJvbg==',
    facts: [
      "I was an Argentine army general and politician.",
      "I was elected President of Argentina three times.",
      "My political movement is known as Peronism."
    ],
    hint: "Husband of Evita.",
    continent: 'South America'
  },
  {
    id: 'sa-16',
    encryptedName: 'QXlydG9uIFNlbm5h',
    facts: [
      "I was a Brazilian racing driver.",
      "I won the Formula One World Drivers' Championship in 1988, 1990, and 1991.",
      "I died in an accident leading the 1994 San Marino Grand Prix."
    ],
    hint: "F1 Legend.",
    continent: 'South America'
  },
  {
    id: 'sa-17',
    encryptedName: 'QWxiZXJ0byBTYW50b3MtRHVtb250',
    facts: [
      "I was a Brazilian aeronaut, sportsman and inventor.",
      "I designed, built, and flew the first practical dirigible balloons.",
      "I made the first public heavier-than-air flight in Europe."
    ],
    hint: "Father of Aviation in Brazil.",
    continent: 'South America'
  },
  {
    id: 'sa-18',
    encryptedName: 'VHVwYWMgQW1hcnUgSUk=',
    facts: [
      "I was the leader of a large Andean uprising against the Spanish in Peru.",
      "I claimed descent from the last Inca ruler.",
      "I was executed by being dismembered by four horses."
    ],
    hint: "Leader of the Great Rebellion.",
    continent: 'South America'
  },
  {
    id: 'sa-19',
    encryptedName: 'Q2hpY28gTWVuZGVz',
    facts: [
      "I was a Brazilian rubber tapper, trade union leader and environmentalist.",
      "I fought to preserve the Amazon rainforest and advocated for the human rights of indigenous peoples.",
      "I was assassinated by a rancher."
    ],
    hint: "Amazon guardian.",
    continent: 'South America'
  },
  {
    id: 'sa-20',
    encryptedName: 'UGFibG8gRXNjb2Jhcg==',
    facts: [
      "I was a Colombian drug lord and narcoterrorist.",
      "I was the founder and sole leader of the Medellín Cartel.",
      "I was dubbed 'The King of Cocaine'."
    ],
    hint: "Infamous Narco.",
    continent: 'South America'
  },
  {
    id: 'sa-21',
    encryptedName: 'R2FicmllbCBHYXJjaWEgTWFycXVleg==',
    facts: [
      "I was a Colombian novelist, short-story writer, screenwriter, and journalist.",
      "I popularized a literary style known as magic realism.",
      "I wrote 'One Hundred Years of Solitude'."
    ],
    hint: "Gabo.",
    continent: 'South America'
  },
  {
    id: 'sa-22',
    encryptedName: 'UGFibG8gTmVydWRh',
    facts: [
      "I was a Chilean poet-diplomat and politician.",
      "I won the Nobel Prize for Literature in 1971.",
      "I wrote 'Twenty Love Poems and a Song of Despair'."
    ],
    hint: "Famous Chilean Poet.",
    continent: 'South America'
  },
  {
    id: 'sa-23',
    encryptedName: 'SXNhYmVsIEFsbGVuZGU=',
    facts: [
      "I am a Chilean-American writer.",
      "I am one of the world's most widely read Spanish-language authors.",
      "I wrote 'The House of the Spirits'."
    ],
    hint: "Related to a Chilean president.",
    continent: 'South America'
  },
  {
    id: 'sa-24',
    encryptedName: 'TGF1dGFybw==',
    facts: [
      "I was a young Mapuche toqui (military leader) in the War of Arauco in present-day Chile.",
      "I led the resistance against the Spanish conquest.",
      "I learned Spanish military tactics while a captive and used them against the invaders."
    ],
    hint: "Mapuche hero.",
    continent: 'South America'
  },
  {
    id: 'sa-25',
    encryptedName: 'Q2F1cG9saWNhbg==',
    facts: [
      "I was a Mapuche toqui who led the resistance against the Spanish conquistadors.",
      "I was elected leader by holding a heavy log for two days and two nights.",
      "I was executed by impalement."
    ],
    hint: "Legendary Mapuche chief.",
    continent: 'South America'
  },
  {
    id: 'sa-26',
    encryptedName: 'RnJhbmNpc2NvIGRlIE1pcmFuZGE=',
    facts: [
      "I was a Venezuelan military leader and revolutionary.",
      "I participated in the American Revolution, the French Revolution, and the Spanish American wars of independence.",
      "I am known as 'The Precursor' to Simon Bolivar's liberation."
    ],
    hint: "Designed the Venezuelan flag.",
    continent: 'South America'
  },
  {
    id: 'sa-27',
    encryptedName: 'UGVkcm8gSQ==',
    facts: [
      "I was the founder and first ruler of the Empire of Brazil.",
      "I declared Brazil's independence from Portugal with the 'Cry of Ipiranga'.",
      "I also briefly reigned over Portugal as King Pedro IV."
    ],
    hint: "Independence or Death!",
    continent: 'South America'
  },
  {
    id: 'sa-28',
    encryptedName: 'QW50b25pbyBKb3NlIGRlIFN1Y3Jl',
    facts: [
      "I was a Venezuelan independence leader and the fourth President of Peru.",
      "I was one of Simon Bolivar's closest generals and friends.",
      "The constitutional capital of Bolivia is named after me."
    ],
    hint: "Grand Marshal of Ayacucho.",
    continent: 'South America'
  },
  {
    id: 'sa-29',
    encryptedName: 'VGlyYWRlbnRlcw==',
    facts: [
      "I was a leading member of the Brazilian colonial revolutionary movement known as the Inconfidência Mineira.",
      "I was a dentist by trade.",
      "I am considered a national hero of Brazil and patron of the Military Police."
    ],
    hint: "The Tooth Puller.",
    continent: 'South America'
  },
  {
    id: 'sa-30',
    encryptedName: 'RnJhbmNpc2NvIFBpemFycm8=',
    facts: [
      "I was a Spanish conquistador who led the expedition that conquered the Inca Empire.",
      "I captured and killed the Inca emperor Atahualpa.",
      "I founded the city of Lima."
    ],
    hint: "Conqueror of Peru.",
    continent: 'South America'
  },

  // =================================================================
  // OCEANIA
  // =================================================================
  {
    id: 'oc-1',
    encryptedName: 'SmFtZXMgQ29vaw==',
    facts: [
      "I was a British explorer, navigator, cartographer, and captain in the Royal Navy.",
      "I made detailed maps of Newfoundland prior to making three voyages to the Pacific Ocean.",
      "I was the first European to make contact with the eastern coastline of Australia."
    ],
    hint: "Captain Cook.",
    continent: 'Oceania'
  },
  {
    id: 'oc-2',
    encryptedName: 'RWRkaWUgTWFibw==',
    facts: [
      "I was an Indigenous Australian from the Torres Strait Islands.",
      "I is known for my role in campaigning for Indigenous land rights.",
      "My legal battle led to the overturning of the doctrine of 'terra nullius'."
    ],
    hint: "Mabo v Queensland.",
    continent: 'Oceania'
  },
  {
    id: 'oc-3',
    encryptedName: 'TmVkIEtlbGx5',
    facts: [
      "I was an Australian bushranger, outlaw, gang leader and convicted police murderer.",
      "I am famous for wearing a suit of bulletproof armour during my final shootout with the police.",
      "My last words were reportedly 'Such is life'."
    ],
    hint: "Iron-clad outlaw.",
    continent: 'Oceania'
  },
  {
    id: 'oc-4',
    encryptedName: 'RG9uYWxkIEJyYWRtYW4=',
    facts: [
      "I was an Australian international cricketer.",
      "I am widely acknowledged as the greatest batsman of all time.",
      "My career Test batting average of 99.94 is cited as the greatest achievement by any sportsman."
    ],
    hint: "The Don.",
    continent: 'Oceania'
  },
  {
    id: 'oc-5',
    encryptedName: 'RWRtdW5kIEhpbGxhcnk=',
    facts: [
      "I was a New Zealand mountaineer, explorer, and philanthropist.",
      "Along with Tenzing Norgay, I became the first confirmed climber to reach the summit of Mount Everest.",
      "I dedicated much of my life to helping the Sherpa people of Nepal."
    ],
    hint: "First on Everest.",
    continent: 'Oceania'
  },
  {
    id: 'oc-6',
    encryptedName: 'RXJuZXN0IFJ1dGhlcmZvcmQ=',
    facts: [
      "I was a New Zealand physicist who came to be known as the father of nuclear physics.",
      "I discovered the concept of radioactive half-life and the proton.",
      "I won the Nobel Prize in Chemistry in 1908."
    ],
    hint: "Split the atom.",
    continent: 'Oceania'
  },
  {
    id: 'oc-7',
    encryptedName: 'S2F0ZSBTaGVwcGFyZA==',
    facts: [
      "I was the most prominent member of the women's suffrage movement in New Zealand.",
      "Because of my work, New Zealand became the first country to grant women the right to vote in 1893.",
      "My portrait appears on the New Zealand ten-dollar note."
    ],
    hint: "NZ Suffragette.",
    continent: 'Oceania'
  },
  {
    id: 'oc-8',
    encryptedName: 'VHJ1Z2FuaW5p',
    facts: [
      "I was a woman widely considered to have been the last full-blooded Aboriginal Tasmanian.",
      "I survived the Black War and was moved to Flinders Island.",
      "My life symbolizes the devastation of the Tasmanian Aboriginal people."
    ],
    hint: "Tasmanian icon.",
    continent: 'Oceania'
  },
  {
    id: 'oc-9',
    encryptedName: 'S2FtZWhhbWVoYSBJ',
    facts: [
      "I was the founder and first ruler of the Kingdom of Hawaii.",
      "I conquered and united the Hawaiian Islands.",
      "I established the 'Law of the Splintered Paddle' protecting civilians in war."
    ],
    hint: "Kamehameha the Great.",
    continent: 'Oceania'
  },
  {
    id: 'oc-10',
    encryptedName: 'UXVlZW4gTGlsaXVva2FsYW5p',
    facts: [
      "I was the first queen regnant and the last sovereign monarch of the Kingdom of Hawaii.",
      "I was overthrown by a group of businessmen and sugar planters.",
      "I composed the song 'Aloha Oe'."
    ],
    hint: "Last Queen of Hawaii.",
    continent: 'Oceania'
  },
  {
    id: 'oc-11',
    encryptedName: 'R291Z2ggV2hpdGxhbQ==',
    facts: [
      "I was an Australian politician who served as the 21st Prime Minister of Australia.",
      "I implemented universal health care and free university education.",
      "I was dismissed from office by the Governor-General in the 1975 constitutional crisis."
    ],
    hint: "Dismissed!",
    continent: 'Oceania'
  },
  {
    id: 'oc-12',
    encryptedName: 'Um9iZXJ0IE1lbnppZXM=',
    facts: [
      "I was an Australian politician who served as the 12th Prime Minister of Australia.",
      "I served for a total of over 18 years, making me Australia's longest-serving prime minister.",
      "I founded the Liberal Party of Australia."
    ],
    hint: "Pig Iron Bob.",
    continent: 'Oceania'
  },
  {
    id: 'oc-13',
    encryptedName: 'V2lsbGlhbSBCbGlnaA==',
    facts: [
      "I was a British officer in the Royal Navy and a colonial administrator.",
      "I was the victim of the Mutiny on the Bounty.",
      "I later became the Governor of New South Wales and faced the Rum Rebellion."
    ],
    hint: "Captain of the Bounty.",
    continent: 'Oceania'
  },
  {
    id: 'oc-14',
    encryptedName: 'QmFuam8gUGF0ZXJzb24=',
    facts: [
      "I was an Australian bush poet, journalist and author.",
      "I wrote many ballads and poems about Australian life.",
      "I wrote 'The Man from Snowy River' and 'Waltzing Matilda'."
    ],
    hint: "The Bard of the Bush.",
    continent: 'Oceania'
  },
  {
    id: 'oc-15',
    encryptedName: 'U3RldmUgSXJ3aW4=',
    facts: [
      "I was an Australian zookeeper, conservationist, and television personality.",
      "I achieved worldwide fame from the television series 'The Crocodile Hunter'.",
      "I died after being pierced in the chest by a stingray barb."
    ],
    hint: "Crikey!",
    continent: 'Oceania'
  },
  {
    id: 'oc-16',
    encryptedName: 'V2hpbmEgQ29vcGVy',
    facts: [
      "I was a respected kuia (Maori elder) and activist.",
      "I led the 1975 Māori Land March from Te Hāpua to Wellington.",
      "I spent my life fighting for Māori land rights and social justice."
    ],
    hint: "Mother of the Nation (Te Whaea o te Motu).",
    continent: 'Oceania'
  },
  {
    id: 'oc-17',
    encryptedName: 'VGUgUmF1cGFyYWhh',
    facts: [
      "I was a Māori rangatira (chief) and war leader of the Ngāti Toa tribe.",
      "I composed the 'Ka Mate' haka, which is performed by the All Blacks.",
      "I played a major role in the Musket Wars."
    ],
    hint: "Composer of the famous Haka.",
    continent: 'Oceania'
  },
  {
    id: 'oc-18',
    encryptedName: 'SG9uZSBIZWtl',
    facts: [
      "I was a Māori chief of the Ngāpuhi tribe.",
      "I is famous for chopping down the British flagstaff at Kororāreka four times.",
      "I instigated the Flagstaff War."
    ],
    hint: "Chopped down the flagpole.",
    continent: 'Oceania'
  },
  {
    id: 'oc-19',
    encryptedName: 'TGFjaGxhbiBNYWNxdWFyaWU=',
    facts: [
      "I was a British military officer and colonial administrator.",
      "I served as the Governor of New South Wales and played a leading role in its social, economic, and architectural development.",
      "I am often called the 'Father of Australia'."
    ],
    hint: "Many places in Sydney are named after him.",
    continent: 'Oceania'
  },
  {
    id: 'oc-20',
    encryptedName: 'RHVrZSBLYWhhbmFtb2t1',
    facts: [
      "I was a Hawaiian competition swimmer and surfer.",
      "I was a five-time Olympic medalist in swimming.",
      "I am popularly known as the father of modern surfing."
    ],
    hint: "The Big Kahuna.",
    continent: 'Oceania'
  },
  {
    id: 'oc-21',
    encryptedName: 'UGV0ZXIgTGFsb3I=',
    facts: [
      "I was an Irish-Australian rebel and politician.",
      "I led the Eureka Stockade rebellion in 1854.",
      "I later became the only outlaw to make it to parliament."
    ],
    hint: "Eureka Stockade leader.",
    continent: 'Oceania'
  },
  {
    id: 'oc-22',
    encryptedName: 'Q2hhcmxlcyBLaW5nc2ZvcmQgU21pdGg=',
    facts: [
      "I was an early Australian aviator.",
      "I made the first trans-Pacific flight from the United States to Australia.",
      "I disappeared while attempting to break a speed record from London to Australia."
    ],
    hint: "Smithy.",
    continent: 'Oceania'
  },
  {
    id: 'oc-23',
    encryptedName: 'SG93YXJkIEZsb3JleQ==',
    facts: [
      "I was an Australian pharmacologist and pathologist.",
      "I shared the Nobel Prize for the development of penicillin.",
      "My work is estimated to have saved over 200 million lives."
    ],
    hint: "Penicillin pioneer.",
    continent: 'Oceania'
  },
  {
    id: 'oc-24',
    encryptedName: 'RWRpdGggQ293YW4=',
    facts: [
      "I was an Australian social reformer who worked for the rights and welfare of women and children.",
      "I became the first woman elected to an Australian parliament.",
      "My face is on the Australian $50 note."
    ],
    hint: "First female MP in Australia.",
    continent: 'Oceania'
  },
  {
    id: 'oc-25',
    encryptedName: 'TWFyeSBNYWNLaWxsb3A=',
    facts: [
      "I was an Australian nun who founded the Sisters of St Joseph of the Sacred Heart.",
      "I established schools and welfare institutions for the poor throughout Australasia.",
      "I am the first and only Australian to be canonized as a saint."
    ],
    hint: "Saint Mary of the Cross.",
    continent: 'Oceania'
  },
  {
    id: 'oc-26',
    encryptedName: 'Q2Fyb2xpbmUgQ2hpc2hvbG0=',
    facts: [
      "I was a 19th-century English humanitarian known for my work with female immigrants in Australia.",
      "I became known as 'the emigrant's friend'.",
      "I appeared on the Australian $5 note for many years."
    ],
    hint: "The Emigrant's Friend.",
    continent: 'Oceania'
  },
  {
    id: 'oc-27',
    encryptedName: 'SGVucnkgTGF3c29u',
    facts: [
      "I was an Australian writer and bush poet.",
      "I am often called Australia's 'greatest short story writer'.",
      "I wrote 'The Drover's Wife'."
    ],
    hint: "Competitor of Banjo Paterson.",
    continent: 'Oceania'
  },
  {
    id: 'oc-28',
    encryptedName: 'QmVubmVsb25n',
    facts: [
      "I was a senior man of the Eora, an Aboriginal people of the Port Jackson area.",
      "I served as an interlocutor between the Eora and the British.",
      "The Sydney Opera House stands on the point named after me."
    ],
    hint: "Friend of Governor Phillip.",
    continent: 'Oceania'
  },
  {
    id: 'oc-29',
    encryptedName: 'UGVtdWx3dXk=',
    facts: [
      "I was an Aboriginal Australian of Eora descent.",
      "I led a resistance movement against the British settlement at Sydney.",
      "I was known as the 'Rainbow Warrior' by some."
    ],
    hint: "Resistance leader against the British.",
    continent: 'Oceania'
  },
  {
    id: 'oc-30',
    encryptedName: 'Q2F0aHkgRnJlZW1hbg==',
    facts: [
      "I am an Australian former sprinter who specialized in the 400 metres event.",
      "I lit the Olympic flame at the 2000 Summer Olympics in Sydney.",
      "I won the gold medal in the 400m at those same Olympics."
    ],
    hint: "Aboriginal Olympic Gold Medalist.",
    continent: 'Oceania'
  }
];
