window.addEventListener('load', function load() {
	window.removeEventListener('load', load, false);

	const BIBLE_VERSES = [
			// Genesis
			{
				v: 'Genesis 1:27',
				t: 'So God created man in his own image, in the image of God created he him; male and female created he them.'
			},
			// Leviticus
			{
				v: 'Leviticus 19:18',
				t: 'Thou shalt not avenge, nor bear any grudge against the children of thy people, but thou shalt love thy neighbour as thyself: I am the <span class="small-caps">Lord</span>.'
			},
			// Numbers
			{
				v: 'Numbers 6:24-26',
				t: 'The <span class="small-caps">Lord</span> bless thee, and keep thee: The <span class="small-caps">Lord</span> make his face shine upon thee, and be gracious unto thee: The <span class="small-caps">Lord</span> lift up his countenance upon thee, and give thee peace.'
			},
			// Deuteronomy
			{
				v: 'Deuteronomy 6:4',
				t: 'Hear, O Israel: The <span class="small-caps">Lord</span> our God is one <span class="small-caps">Lord</span>:'
			},
			{
				v: 'Deuteronomy 31:6',
				t: 'Be strong and of a good courage, fear not, nor be afraid of them: for the <span class="small-caps">Lord</span> thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.'
			},
			// Joshua
			{
				v: 'Joshua 1:9',
				t: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the <span class="small-caps">Lord</span> thy God is with thee whithersoever thou goest.'
			},
			// Psalms
			{
				v: 'Psalms 9:10',
				t: 'And they that know thy name will put their trust in thee: for thou, <span class="small-caps">Lord</span>, hast not forsaken them that seek thee.'
			},
			{
				v: 'Psalms 23:1',
				t: 'The <span class="small-caps">Lord</span> is my shepherd; I shall not want.'
			},
			{
				v: 'Psalms 94:1-2',
				t: 'O <span class="small-caps">Lord</span> God, to whom vengeance belongeth; O God, to whom vengeance belongeth, shew thyself. Lift up thyself, thou judge of the earth: render a reward to the proud.'
			},
			// Proverbs
			{
				v: 'Proverbs 1:5',
				t: 'A wise man will hear, and will increase learning; and a man of understanding shall attain unto wise counsels:'
			},
			{
				v: 'Proverbs 1:7',
				t: 'The fear of the <span class="small-caps">Lord</span> is the beginning of knowledge: but fools despise wisdom and instruction.'
			},
			{
				v: 'Proverbs 3:5',
				t: 'Trust in the <span class="small-caps">Lord</span> with all thine heart; and lean not unto thine own understanding.'
			},
			{
				v: 'Proverbs 3:6',
				t: 'In all thy ways acknowledge him, and he shall direct thy paths.'
			},
			{
				v: 'Proverbs 6:16-19',
				t: 'These six things doth the <span class="small-caps">Lord</span> hate: yea, seven are an abomination unto him: A proud look, a lying tongue, and hands that shed innocent blood, An heart that deviseth wicked imaginations, feet that be swift in running to mischief, A false witness that speaketh lies, and he that soweth discord among brethren.'
			},
			{
				v: 'Proverbs 12:22',
				t: 'Lying lips are abomination to the <span class="small-caps">Lord</span>: but they that deal truly are his delight.'
			},
			{
				v: 'Proverbs 22:6',
				t: 'Train up a child in the way he should go: and when he is old, he will not depart from it.'
			},
			{
				v: 'Proverbs 28:1',
				t: 'The wicked flee when no man pursueth: but the righteous are bold as a lion.'
			},
			{
				v: 'Proverbs 28:13',
				t: 'He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy.'
			},
			{
				v: 'Proverbs 30:5',
				t: 'Every word of God is pure: he is a shield unto them that put their trust in him.'
			},
			{
				v: 'Proverbs 31:10',
				t: 'Who can find a virtuous woman? for her price is far above rubies.'
			},
			// Isaiah
			{
				v: 'Isaiah 5:20',
				t: 'Woe unto them that call evil good, and good evil; that put darkness for light, and light for darkness; that put bitter for sweet, and sweet for bitter!'
			},
			{
				v: 'Isaiah 8:20',
				t: 'To the law and to the testimony: if they speak not according to this word, it is because there is no light in them.'
			},
			{
				v: 'Isaiah 9:6',
				t: 'For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.'
			},
			{
				v: 'Isaiah 53:4',
				t: 'Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted.'
			},
			{
				v: 'Isaiah 53:5',
				t: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.'
			},
			{
				v: 'Isaiah 53:6',
				t: 'All we like sheep have gone astray; we have turned every one to his own way; and the Lord hath laid on him the iniquity of us all.'
			},
			{
				v: 'Isaiah 55:7',
				t: 'Let the wicked forsake his way, and the unrighteous man his thoughts: and let him return unto the <span class="small-caps">Lord</span>, and he will have mercy upon him; and to our God, for he will abundantly pardon.'
			},
			// Jeremiah
			{
				v: 'Jeremiah 29:11',
				t: 'For I know the thoughts that I think toward you, saith the <span class="small-caps">Lord</span>, thoughts of peace, and not of evil, to give you an expected end.'
			},
			// Hosea
			{
				v: 'Hosea 4:6',
				t: 'My people are destroyed for lack of knowledge: because thou hast rejected knowledge, I will also reject thee, that thou shalt be no priest to me: seeing thou hast forgotten the law of thy God, I will also forget thy children.'
			},
			// Matthew
			{
				v: 'Matthew 4:4',
				t: 'But he answered and said, <span class="red">It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.</span>'
			},
			{
				v: 'Matthew 5:3',
				t: '<span class="red">Blessed are the poor in spirit: for theirs is the kingdom of heaven.</span>'
			},
			{
				v: 'Matthew 5:4',
				t: '<span class="red">Blessed are they that mourn: for they shall be comforted.</span>'
			},
			{
				v: 'Matthew 5:5',
				t: '<span class="red">Blessed are the meek: for they shall inherit the earth.</span>'
			},
			{
				v: 'Matthew 5:6',
				t: '<span class="red">Blessed are they which do hunger and thirst after righteousness: for they shall be filled.</span>'
			},
			{
				v: 'Matthew 5:7',
				t: '<span class="red">Blessed are the merciful: for they shall obtain mercy.</span>'
			},
			{
				v: 'Matthew 5:8',
				t: '<span class="red">Blessed are the pure in heart: for they shall see God.</span>'
			},
			{
				v: 'Matthew 5:9',
				t: '<span class="red">Blessed are the peacemakers: for they shall be called the children of God.</span>'
			},
			{
				v: 'Matthew 5:11-12',
				t: '<span class="red">Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake. Rejoice, and be exceeding glad: for great is your reward in heaven: for so persecuted they the prophets which were before you.</span>'
			},
			{
				v: 'Matthew 5:13',
				t: '<span class="red">Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men.</span>'
			},
			{
				v: 'Matthew 5:14',
				t: '<span class="red">Ye are the light of the world. A city that is set on an hill cannot be hid.</span>'
			},
			{
				v: 'Matthew 5:16',
				t: '<span class="red">Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.</span>'
			},
			{
				v: 'Matthew 5:17',
				t: '<span class="red">Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil.</span>'
			},
			{
				v: 'Matthew 5:18',
				t: '<span class="red">For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled.</span>'
			},
			{
				v: 'Matthew 5:19',
				t: '<span class="red">Whosoever therefore shall break one of these least commandments, and shall teach men so, he shall be called the least in the kingdom of heaven: but whosoever shall do and teach them, the same shall be called great in the kingdom of heaven.</span>'
			},
			{
				v: 'Matthew 5:22',
				t: '<span class="red">But I say unto you, That whosoever is angry with his brother without a cause shall be in danger of the judgment: and whosoever shall say to his brother, Raca, shall be in danger of the council: but whosoever shall say, Thou fool, shall be in danger of hell fire.</span>'
			},
			{
				v: 'Matthew 5:25',
				t: '<span class="red">Agree with thine adversary quickly, whiles thou art in the way with him; lest at any time the adversary deliver thee to the judge, and the judge deliver thee to the officer, and thou be cast into prison.</span>'
			},
			{
				v: 'Matthew 5:27-28',
				t: '<span class="red">Ye have heard that it was said by them of old time, Thou shalt not commit adultery: But I say unto you, That whosoever looketh on a woman to lust after her hath committed adultery with her already in his heart.</span>'
			},
			{
				v: 'Matthew 5:29',
				t: '<span class="red">And if thy right eye offend thee, pluck it out, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.</span>'
			},
			{
				v: 'Matthew 5:30',
				t: '<span class="red">And if thy right hand offend thee, cut it off, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.</span>'
			},
			{
				v: 'Matthew 5:36-37',
				t: '<span class="red">Neither shalt thou swear by thy head, because thou canst not make one hair white or black. But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.</span>'
			},
			{
				v: 'Matthew 5:38-39',
				t: '<span class="red">Ye have heard that it hath been said, An eye for an eye, and a tooth for a tooth: But I say unto you, That ye resist not evil: but whosoever shall smite thee on thy right cheek, turn to him the other also.</span>'
			},
			{
				v: 'Matthew 5:40-41',
				t: '<span class="red">And if any man will sue thee at the law, and take away thy coat, let him have thy cloak also. And whosoever shall compel thee to go a mile, go with him twain.</span>'
			},
			{
				v: 'Matthew 5:44-45',
				t: '<span class="red">But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you; That ye may be the children of your Father which is in heaven: for he maketh his sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust.</span>'
			},
			{
				v: 'Matthew 6:1',
				t: '<span class="red">Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven.</span>'
			},
			{
				v: 'Matthew 6:3-4',
				t: '<span class="red">But when thou doest alms, let not thy left hand know what thy right hand doeth: That thine alms may be in secret: and thy Father which seeth in secret himself shall reward thee openly.</span>'
			},
			{
				v: 'Matthew 6:6',
				t: '<span class="red">But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly.</span>'
			},
			{
				v: 'Matthew 6:7',
				t: '<span class="red">But when ye pray, use not vain repetitions, as the heathen do: for they think that they shall be heard for their much speaking.</span>'
			},
			{
				v: 'Matthew 6:17-18',
				t: '<span class="red">But thou, when thou fastest, anoint thine head, and wash thy face; That thou appear not unto men to fast, but unto thy Father which is in secret: and thy Father, which seeth in secret, shall reward thee openly.</span>'
			},
			{
				v: 'Matthew 6:19-21',
				t: '<span class="red">Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal: But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal: For where your treasure is, there will your heart be also.</span>'
			},
			{
				v: 'Matthew 6:22-23',
				t: '<span class="red">The light of the body is the eye: if therefore thine eye be single, thy whole body shall be full of light. But if thine eye be evil, thy whole body shall be full of darkness. If therefore the light that is in thee be darkness, how great is that darkness!</span>'
			},
			{
				v: 'Matthew 6:24',
				t: '<span class="red">No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon.</span>'
			},
			{
				v: 'Matthew 6:26',
				t: '<span class="red">Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them. Are ye not much better than they?</span>'
			},
			{
				v: 'Matthew 6:33',
				t: '<span class="red">But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.</span>'
			},
			{
				v: 'Matthew 6:34',
				t: '<span class="red">Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.</span>'
			},
			{
				v: 'Matthew 7:1-2',
				t: '<span class="red">Judge not, that ye be not judged. For with what judgment ye judge, ye shall be judged: and with what measure ye mete, it shall be measured to you again.</span>'
			},
			{
				v: 'Matthew 7:6',
				t: '<span class="red">Give not that which is holy unto the dogs, neither cast ye your pearls before swine, lest they trample them under their feet, and turn again and rend you.</span>'
			},
			{
				v: 'Matthew 7:7-8',
				t: '<span class="red">Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you: For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened.</span>'
			},
			{
				v: 'Matthew 7:9-11',
				t: '<span class="red">Or what man is there of you, whom if his son ask bread, will he give him a stone? Or if he ask a fish, will he give him a serpent? If ye then, being evil, know how to give good gifts unto your children, how much more shall your Father which is in heaven give good things to them that ask him?</span>'
			},
			{
				v: 'Matthew 7:12',
				t: '<span class="red">Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.</span>'
			},
			{
				v: 'Matthew 7:13-14',
				t: '<span class="red">Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat: Because strait is the gate, and narrow is the way, which leadeth unto life, and few there be that find it.</span>'
			},
			{
				v: 'Matthew 7:15',
				t: '<span class="red">Beware of false prophets, which come to you in sheep\'s clothing, but inwardly they are ravening wolves.</span>'
			},
			{
				v: 'Matthew 7:18-20',
				t: '<span class="red">A good tree cannot bring forth evil fruit, neither can a corrupt tree bring forth good fruit. Every tree that bringeth not forth good fruit is hewn down, and cast into the fire. Wherefore by their fruits ye shall know them.</span>'
			},
			{
				v: 'Matthew 7:21',
				t: '<span class="red">Not every one that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my Father which is in heaven.</span>'
			},
			{
				v: 'Matthew 7:22-23',
				t: '<span class="red">Many will say to me in that day, Lord, Lord, have we not prophesied in thy name? and in thy name have cast out devils? and in thy name done many wonderful works? And then will I profess unto them, I never knew you: depart from me, ye that work iniquity.</span>'
			},
			{
				v: 'Matthew 7:24-25',
				t: '<span class="red">Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock: And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell not: for it was founded upon a rock.</span>'
			},
			{
				v: 'Matthew 10:16',
				t: '<span class="red">Behold, I send you forth as sheep in the midst of wolves: be ye therefore wise as serpents, and harmless as doves.</span>'
			},
			{
				v: 'Matthew 11:28',
				t: '<span class="red">Come unto me, all ye that labour and are heavy laden, and I will give you rest.</span>'
			},
			{
				v: 'Matthew 11:29-30',
				t: '<span class="red">Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light.</span>'
			},
			{
				v: 'Matthew 18:11',
				t: '<span class="red">For the Son of man is come to save that which was lost.</span>'
			},
			{
				v: 'Matthew 20:16',
				t: '<span class="red">So the last shall be first, and the first last: for many be called, but few chosen.</span>'
			},
			{
				v: 'Matthew 22:37-39',
				t: 'Jesus said unto him, <span class="red">Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself.</span>'
			},
			{
				v: 'Matthew 25:13',
				t: '<span class="red">Watch therefore, for ye know neither the day nor the hour wherein the Son of man cometh.</span>'
			},
			{
				v: 'Matthew 25:31',
				t: '<span class="red">When the Son of man shall come in his glory, and all the holy angels with him, then shall he sit upon the throne of his glory:</span>'
			},
			{
				v: 'Matthew 28:18',
				t: 'And Jesus came and spake unto them, saying, <span class="red">All power is given unto me in heaven and in earth.</span>'
			},
			{
				v: 'Matthew 28:19',
				t: '<span class="red">Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:</span>'
			},
			// Mark
			{
				v: 'Mark 2:17',
				t: 'When Jesus heard it, he saith unto them, <span class="red">They that are whole have no need of the physician, but they that are sick: I came not to call the righteous, but sinners to repentance.</span>'
			},
			{
				v: 'Mark 4:22',
				t: '<span class="red">For there is nothing hid, which shall not be manifested; neither was any thing kept secret, but that it should come abroad.</span>'
			},
			{
				v: 'Mark 6:11',
				t: '<span class="red">And whosoever shall not receive you, nor hear you, when ye depart thence, shake off the dust under your feet for a testimony against them. Verily I say unto you, It shall be more tolerable for Sodom and Gomorrha in the day of judgment, than for that city.</span>'
			},
			{
				v: 'Mark 8:34',
				t: 'And when he had called the people unto him with his disciples also, he said unto them, <span class="red">Whosoever will come after me, let him deny himself, and take up his cross, and follow me.</span>'
			},
			{
				v: 'Mark 10:24-25',
				t: 'And the disciples were astonished at his words. But Jesus answereth again, and saith unto them, <span class="red">Children, how hard is it for them that trust in riches to enter into the kingdom of God! It is easier for a camel to go through the eye of a needle, than for a rich man to enter into the kingdom of God.</span>'
			},
			{
				v: 'Mark 10:27',
				t: 'And Jesus looking upon them saith, <span class="red">With men it is impossible, but not with God: for with God all things are possible.</span>'
			},
			{
				v: 'Mark 12:30-31',
				t: '<span class="red">And thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength: this is the first commandment. And the second is like, namely this, Thou shalt love thy neighbour as thyself. There is none other commandment greater than these.</span>'
			},
			{
				v: 'Mark 16:15-16',
				t: 'And he said unto them, <span class="red">Go ye into all the world, and preach the gospel to every creature. He that believeth and is baptized shall be saved; but he that believeth not shall be damned.</span>'
			},
			// Luke
			{
				v: 'Luke 2:14',
				t: 'Glory to God in the highest, and on earth peace, good will toward men.'
			},
			{
				v: 'Luke 6:22',
				t: '<span class="red">Blessed are ye, when men shall hate you, and when they shall separate you from their company, and shall reproach you, and cast out your name as evil, for the Son of man\'s sake.</span>'
			},
			{
				v: 'Luke 6:28',
				t: '<span class="red">Bless them that curse you, and pray for them which despitefully use you.</span>'
			},
			{
				v: 'Luke 6:31',
				t: '<span class="red">And as ye would that men should do to you, do ye also to them likewise.</span>'
			},
			{
				v: 'Luke 8:17',
				t: '<span class="red">For nothing is secret, that shall not be made manifest; neither any thing hid, that shall not be known and come abroad.</span>'
			},
			{
				v: 'Luke 9:55-56',
				t: 'But he turned, and rebuked them, and said, <span class="red">Ye know not what manner of spirit ye are of. For the Son of man is not come to destroy men\'s lives, but to save them.</span> And they went to another village.'
			},
			{
				v: 'Luke 11:33',
				t: '<span class="red">No man, when he hath lighted a candle, putteth it in a secret place, neither under a bushel, but on a candlestick, that they which come in may see the light.</span>'
			},
			{
				v: 'Luke 23:34',
				t: 'Then said Jesus, <span class="red">Father, forgive them; for they know not what they do.</span> And they parted his raiment, and cast lots.'
			},
			// John
			{
				v: 'John 1:1',
				t: 'In the beginning was the Word, and the Word was with God, and the Word was God.'
			},
			{
				v: 'John 1:12',
				t: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:'
			},
			{
				v: 'John 1:14',
				t: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.'
			},
			{
				v: 'John 3:3',
				t: 'Jesus answered and said unto him, <span class="red">Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God.</span>'
			},
			{
				v: 'John 3:16',
				t: '<span class="red">For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.</span>'
			},
			{
				v: 'John 3:20',
				t: '<span class="red">For every one that doeth evil hateth the light, neither cometh to the light, lest his deeds should be reproved.</span>'
			},
			{
				v: 'John 4:24',
				t: '<span class="red">God is a Spirit: and they that worship him must worship him in spirit and in truth.</span>'
			},
			{
				v: 'John 5:24',
				t: '<span class="red">Verily, verily, I say unto you, He that heareth my word, and believeth on him that sent me, hath everlasting life, and shall not come into condemnation; but is passed from death unto life.</span>'
			},
			{
				v: 'John 7:4',
				t: 'For there is no man that doeth any thing in secret, and he himself seeketh to be known openly. If thou do these things, shew thyself to the world.'
			},
			{
				v: 'John 8:12',
				t: 'Then spake Jesus again unto them, saying, <span class="red">I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.</span>'
			},
			{
				v: 'John 8:32',
				t: '<span class="red">And ye shall know the truth, and the truth shall make you free.</span>'
			},
			{
				v: 'John 10:30',
				t: '<span class="red">I and my Father are one.</span>'
			},
			{
				v: 'John 13:34',
				t: '<span class="red">A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another.</span>'
			},
			{
				v: 'John 14:1',
				t: '<span class="red">Let not your heart be troubled: ye believe in God, believe also in me.</span>'
			},
			{
				v: 'John 14:6',
				t: 'Jesus saith unto him, <span class="red">I am the way, the truth, and the life: no man cometh unto the Father, but by me.</span>'
			},
			{
				v: 'John 14:15',
				t: '<span class="red">If ye love me, keep my commandments.</span>'
			},
			{
				v: 'John 15:18',
				t: '<span class="red">If the world hate you, ye know that it hated me before it hated you.</span>'
			},
			{
				v: 'John 15:19',
				t: '<span class="red">If ye were of the world, the world would love his own: but because ye are not of the world, but I have chosen you out of the world, therefore the world hateth you.</span>'
			},
			{
				v: 'John 16:33',
				t: '<span class="red">These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.</span>'
			},
			{
				v: 'John 18:20',
				t: 'Jesus answered him, <span class="red">I spake openly to the world; I ever taught in the synagogue, and in the temple, whither the Jews always resort; and in secret have I said nothing.</span>'
			},
			{
				v: 'John 19:30',
				t: 'When Jesus therefore had received the vinegar, he said, <span class="red">It is finished:</span> and he bowed his head, and gave up the ghost.'
			},
			// Acts
			{
				v: 'Acts 2:38',
				t: 'Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.'
			},
			{
				v: 'Acts 4:12',
				t: 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.'
			},
			{
				v: 'Acts 20:29',
				t: 'For I know this, that after my departing shall grievous wolves enter in among you, not sparing the flock.'
			},
			// Romans
			{
				v: 'Romans 3:10',
				t: 'As it is written, There is none righteous, no, not one:'
			},
			{
				v: 'Romans 3:23-24',
				t: 'For all have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus:'
			},
			{
				v: 'Romans 5:1',
				t: 'Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:'
			},
			{
				v: 'Romans 5:8',
				t: 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.'
			},
			{
				v: 'Romans 5:12',
				t: 'Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned:'
			},
			{
				v: 'Romans 6:23',
				t: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.'
			},
			{
				v: 'Romans 8:1',
				t: 'There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.'
			},
			{
				v: 'Romans 8:28',
				t: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.'
			},
			{
				v: 'Romans 10:9',
				t: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.'
			},
			{
				v: 'Romans 10:13',
				t: 'For whosoever shall call upon the name of the Lord shall be saved.'
			},
			{
				v: 'Romans 12:2',
				t: 'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.'
			},
			{
				v: 'Romans 12:19',
				t: 'Dearly beloved, avenge not yourselves, but rather give place unto wrath: for it is written, Vengeance is mine; I will repay, saith the Lord.'
			},
			{
				v: 'Romans 16:17-18',
				t: 'Now I beseech you, brethren, mark them which cause divisions and offences contrary to the doctrine which ye have learned; and avoid them. For they that are such serve not our Lord Jesus Christ, but their own belly; and by good words and fair speeches deceive the hearts of the simple.'
			},
			// 1 Corinthians
			{
				v: '1 Corinthians 6:9-10',
				t: 'Know ye not that the unrighteous shall not inherit the kingdom of God? Be not deceived: neither fornicators, nor idolaters, nor adulterers, nor effeminate, nor abusers of themselves with mankind, Nor thieves, nor covetous, nor drunkards, nor revilers, nor extortioners, shall inherit the kingdom of God.'
			},
			{
				v: '1 Corinthians 12:3',
				t: 'Wherefore I give you to understand, that no man speaking by the Spirit of God calleth Jesus accursed: and that no man can say that Jesus is the Lord, but by the Holy Ghost.'
			},
			{
				v: '1 Corinthians 16:13-14',
				t: 'Watch ye, stand fast in the faith, quit you like men, be strong. Let all your things be done with charity.'
			},
			// 2 Corinthians
			{
				v: '2 Corinthians 4:3-4',
				t: 'But if our gospel be hid, it is hid to them that are lost: In whom the god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them.'
			},
			{
				v: '2 Corinthians 4:5',
				t: 'For we preach not ourselves, but Christ Jesus the Lord; and ourselves your servants for Jesus\' sake.'
			},
			{
				v: '2 Corinthians 5:7',
				t: 'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.'
			},
			{
				v: '2 Corinthians 9:6',
				t: 'But this I say, He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully.'
			},
			// Galatians
			{
				v: 'Galatians 2:20',
				t: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.'
			},
			{
				v: 'Galatians 5:22',
				t: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,'
			},
			// Ephesians
			{
				v: 'Ephesians 2:8-9',
				t: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.'
			},
			// 1 Timothy
			{
				v: '1 Timothy 6:9-10',
				t: 'But they that will be rich fall into temptation and a snare, and into many foolish and hurtful lusts, which drown men in destruction and perdition. For the love of money is the root of all evil: which while some coveted after, they have erred from the faith, and pierced themselves through with many sorrows.'
			},
			// 2 Timothy
			{
				v: '2 Timothy 3:12',
				t: 'Yea, and all that will live godly in Christ Jesus shall suffer persecution.'
			},
			{
				v: '2 Timothy 3:16',
				t: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:'
			},
			{
				v: '2 Timothy 4:7',
				t: 'I have fought a good fight, I have finished my course, I have kept the faith:'
			},
			// Titus
			{
				v: 'Titus 2:11-12',
				t: 'For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world;'
			},
			// Hebrews
			{
				v: 'Hebrews 11:6',
				t: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.'
			},
			// James
			{
				v: 'James 1:5',
				t: 'If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.'
			},
			{
				v: 'James 1:12',
				t: 'Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life, which the Lord hath promised to them that love him.'
			},
			{
				v: 'James 1:13',
				t: 'Let no man say when he is tempted, I am tempted of God: for God cannot be tempted with evil, neither tempteth he any man:'
			},
			{
				v: 'James 1:19',
				t: 'Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath:'
			},
			{
				v: 'James 1:27',
				t: 'Pure religion and undefiled before God and the Father is this, To visit the fatherless and widows in their affliction, and to keep himself unspotted from the world.'
			},
			{
				v: 'James 2:26',
				t: 'For as the body without the spirit is dead, so faith without works is dead also.'
			},
			{
				v: 'James 4:4',
				t: 'Ye adulterers and adulteresses, know ye not that the friendship of the world is enmity with God? whosoever therefore will be a friend of the world is the enemy of God.'
			},
			{
				v: 'James 4:6',
				t: 'But he giveth more grace. Wherefore he saith, God resisteth the proud, but giveth grace unto the humble.'
			},
			{
				v: 'James 4:7',
				t: 'Submit yourselves therefore to God. Resist the devil, and he will flee from you.'
			},
			{
				v: 'James 5:16',
				t: 'Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.'
			},
			// 1 Peter
			{
				v: '1 Peter 2:24',
				t: 'Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.'
			},
			{
				v: '1 Peter 3:9',
				t: 'Not rendering evil for evil, or railing for railing: but contrariwise blessing; knowing that ye are thereunto called, that ye should inherit a blessing.'
			},
			{
				v: '1 Peter 5:8',
				t: 'Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour:'
			},
			// 1 John
			{
				v: '1 John 3:1',
				t: 'Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.'
			},
			// Revelation
			{
				v: 'Revelation 21:8',
				t: 'But the fearful, and unbelieving, and the abominable, and murderers, and whoremongers, and sorcerers, and idolaters, and all liars, shall have their part in the lake which burneth with fire and brimstone: which is the second death.'
			},
		];

	let spaceKeyDown = false;

	function getRandomVerse() {
		let arrLen = BIBLE_VERSES.length;
		if (arrLen) {
			let randNum = Math.floor(Math.random() * arrLen),
				verse = BIBLE_VERSES[randNum];
			BIBLE_VERSES.splice(randNum, 1);
			document.getElementById('text').innerHTML = verse.t;
			document.getElementById('verse').innerHTML = verse.v;
		} else {
			location.reload();
		}
	}

	document.addEventListener('keydown', function(e) {
		if (e.code == 'Space' && !spaceKeyDown) {
			spaceKeyDown = true;
			getRandomVerse();
		}
	}, false);

	document.addEventListener('keyup', function(e) {
		if (e.code == 'Space') {
			spaceKeyDown = false;
		}
	}, false);

	document.addEventListener('click', function() {
		getRandomVerse();
	}, false);

	getRandomVerse();

}, true);