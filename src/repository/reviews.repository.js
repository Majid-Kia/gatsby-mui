const reviews = [
  {
    "name": "Rahim Raja",
    "rating": "5",
    "date": "June 22, 2022",
    "review": "I am a customer of routerhosting.com(now, cloudzy.com) since April, 2018. I am happy with their resources and support. The quality support provided by the cloudzy team is really remarkable. One humble suggestion is to add 10Gbps port Ubuntu/Windows VPS to their services."
  },
  {
    "name": "Conrad Furman",
    "rating": "5",
    "date": "August 1, 2021",
    "review": "Cloudzy is one of the best VPS hosting companies out there. I use their service for my business and their quality and customer service has helped me through this path a lot."
  },
  {
    "name": "Arnette Stuckey",
    "rating": "4",
    "date": "July 20, 2021",
    "review": "Seeing all the positive reactions to your service around the web brought me to your website and I’d say they are all true."
  },
  {
    "name": "Rosa Sanjin",
    "rating": "5",
    "date": "July 10, 2021",
    "review": "Amazing quality; highest speed; lowest price; And all together the best choice."
  },
  {
    "name": "Matthew Mcnoris",
    "rating": "5",
    "date": "July 1, 2021",
    "review": "Choosing this website services is one the wisest choices you can make to grow your business"
  },
  {
    "name": "James Minty",
    "rating": "5",
    "date": "June 3, 2021",
    "review": "I’ve been using this hosting since 6 months ago to host my App and I am happy so far.. I’ve found it on Google."
  },
  {
    "name": "order cialis online",
    "rating": "4",
    "date": "May 19, 2021",
    "review": "Seeing all the good work you are doing in your Knowledge Base articles and the service you provide for your users is incredible. I have managed to solve many of my problems by reading your articles and I may become a VPS customer of yours someday."
  },
  {
    "name": "Rovan Kenwood",
    "rating": "4",
    "date": "May 6, 2021",
    "review": "The thing that fascinates me the most is the quality with one of the lowest prices I have ever seen, Thank you!"
  },
  {
    "name": "poki",
    "rating": "4",
    "date": "April 11, 2021",
    "review": "Cloudzy has brought something interesting to the table of web hosting which is high quality along with low cost"
  },
  {
    "name": "Daren Fitzgerald",
    "rating": "5",
    "date": "March 14, 2021",
    "review": "Well I mostly use VPS for the RDP feature and I can say it really delivers the best features that windows has prepared for it’s users"
  },
  {
    "name": "Lorenzo Berici",
    "rating": "5",
    "date": "March 10, 2021",
    "review": "I do forex trading a lot and I have used a lot of VPS services for my business but a VPS like the one Cloudzy provides with this price is unbelievable. Cloudzy has one of the best customer services I have ever seen among the VPS providers"
  },
  {
    "name": "Beth Reckards",
    "rating": "4",
    "date": "March 7, 2021",
    "review": "Using Cloudzy VPS was good although I am not using their service anymore I wanted to pay my respects to the good work they are doing"
  },
  {
    "name": "Amee Leflore",
    "rating": "5",
    "date": "March 5, 2021",
    "review": "I am not a VPS user here but I read Cloudzy articles and I can say they know what they are doing in their business"
  },
  {
    "name": "Corrine Valasquez",
    "rating": "5",
    "date": "February 20, 2021",
    "review": "One of my friends introduced Router to me and believe me or not I had my doubts since I had a bunch of unsuccessful experiences using VPS service. But with the service and the care Router provides for their customers I am glad to say that I regret that I had my doubts at the beginning."
  },
  {
    "name": "Ivan Simpson",
    "rating": "5",
    "date": "February 17, 2021",
    "review": "Update: I had a problem from my side which I fixed it and it is working great. They helped me with my problem Error” exact the message Hope these guys will get their shit together and will provide a quality service. I even reinstalled Windows twice and google is still in Arabic. ONE BIG DISSAPOINTMENT"
  },
  {
    "name": "Allen",
    "rating": "5",
    "date": "February 16, 2021",
    "review": "I have been using the Cloudzy Forex VPS for a while and I am satisfied. Cloudzy offers it for $7 to $8 per month. I think that’s pretty cheap. hope this helps! by the way, you can custom it if you want even larger plans Like the cheapest I have seen. the support is also OK!"
  },
  {
    "name": "azitaie",
    "rating": "5",
    "date": "January 31, 2021",
    "review": "One of the best VPS service providers."
  },
  {
    "name": "Ted Woodard",
    "rating": "4",
    "date": "January 10, 2021",
    "review": "This is the first VPS provider company that really delivers what they said they would, I mostly use router’s vps for forex trading and it is really fast and easy to use for me"
  },
  {
    "name": "B William",
    "rating": "5",
    "date": "October 26, 2020",
    "review": "Nice experience with Cloudzy. Zero downtime in three months. Cheap & best."
  },
  {
    "name": "Bran Lawrence",
    "rating": "4",
    "date": "October 13, 2020",
    "review": "The fastest way to get results from your online business is using the right tools in your journey and I can tell you for sure that one of the best tools that can help you is using VPS. Which I recommend you to consider this company among your choices."
  },
  {
    "name": "Saim",
    "rating": "5",
    "date": "August 4, 2020",
    "review": "It was the best experience I ever had and Matt was very friendly and good!   "
  },
  {
    "name": "Noemi Bynum",
    "rating": "5",
    "date": "July 27, 2020",
    "review": "Cloudzy services are the best ones out there."
  },
  {
    "name": "Hans Reiner",
    "rating": "5",
    "date": "July 26, 2020",
    "review": "Well I am not all pro and experienced in using vps but I can tell you for a fact that Cloudzy really delivers"
  },
  {
    "name": "Melissa Tulaba",
    "rating": "4",
    "date": "April 7, 2020",
    "review": "Using NVMe SSDs for the VPS is one of the reasons that I chose this company and I am quite satisfied with my service"
  },
  {
    "name": "Leandro Enzonzi",
    "rating": "5",
    "date": "March 26, 2020",
    "review": "I do Forex trading and I am happy to say that I have managed to make a ton of profit by using your service. Cheers!"
  },
  {
    "name": "Jesus Kleeman",
    "rating": "4",
    "date": "March 6, 2020",
    "review": "Well having all the things users need from a VPS is not something every company can do, but you deliver!"
  },
  {
    "name": "STEVE ADAM",
    "rating": "5",
    "date": "February 4, 2020",
    "review": "Cloudzy is one among the best VPS providers I had ever come across. Recently my VPS developed connection issues. They acted very fast and provided me another VPS and allowed me to use both the servers, until I completely migrated to the new VPS. There was no hurry from the provider. Hardly you can find such vendors in the market. Praiseworthy support."
  },
  {
    "name": "YILDIRIM CAN",
    "rating": "5",
    "date": "January 24, 2020",
    "review": "GOT PERFECT SERVICE FOR MY PROJECT. SETUP WAS FAST AND FINE. THEIR SUPPORT TEAM WAS THERE FOR ME EVERY STEP THAT I NEEDED HELP. EVEN IF THERE WAS A LONG TIME DISTANCE BETWEEN US IT IS NICE TO SEE PEOPLE LIKE THEM IN THE COMMUNITY. BIG VOUCH FROM ME."
  },
  {
    "name": "Tian",
    "rating": "5",
    "date": "December 17, 2019",
    "review": "Great, Just had the best experience with this host. The VPS is great."
  },
  {
    "name": "DIYE JOHN",
    "rating": "5",
    "date": "November 25, 2019",
    "review": "Very genuine hosting provider. I had purchased a VPS on 15-NOV-19. The server had speed issues. The support was fast enough to attend my issue and provided me another server of my preferred location. Great support."
  },
  {
    "name": "Sep",
    "rating": "5",
    "date": "November 4, 2019",
    "review": "I have their services about a year ago, and except a small issue, all the time the service has worked very well. If you add to this, that the customer service is very quick and good, and the price is good, you have a global service very good and recommended."
  },

  {
    "name": "Eric",
    "rating": "5",
    "date": "October 1, 2019",
    "review": "I have been their client for over 11 months now, only had minor issues that were fixed in a reasonable time. The VPS works very well and the support team is helpful."
  },
  {
    "name": "Murrey Hill",
    "rating": "5",
    "date": "September 23, 2019",
    "review": "Cloudzy is one of the best VPS service providers."
  },
  {
    "name": "Richard Siler",
    "rating": "5",
    "date": "August 3, 2019",
    "review": "We are using Cloudzy since 2009 and just being happy for the last 10 years and nothing the less. I do recommend them"
  },
  {
    "name": "moha",
    "rating": "5",
    "date": "May 13, 2019",
    "review": "good vps"
  },
  {
    "name": "NA",
    "rating": "5",
    "date": "May 6, 2019",
    "review": "Lots of options to choose from, definitely one of the cheapest available. Depending on the location the hardware might differ a little. Especially with the cheapest option this can be something to watch for. The support desk is usually available to answer all questions within maximum a few hours. Make sure to ask a clear question because they tend to asnwer shortly, however if not sufficiënt they will continue answerring you until satisfied. 🙂 It would make this service even better if the upgrades are also just on components, they now have only fixed sets available. I am very satisfied and currently have 9 different VPS’s running with them!"
  },
  {
    "name": "OLIVIA NUR",
    "rating": "5",
    "date": "April 24, 2019",
    "review": "I appreciate the exemplary services rendered by Hannan N & Daria S to set up my server operational. I am very pleased with my experience with Cloudzy. I grade them with FIVE STARS."
  },
  {
    "name": "Evan Taylor",
    "rating": "5",
    "date": "April 14, 2019",
    "review": "Their servers are sturdy and faster than that offered by other vendors. I admire their enthusiasm towards customers. Commendable service. If you are new to Cloudzy, don’t worry, blindly go with them. They are that good."
  },
  {
    "name": "Martin Abele",
    "rating": "5",
    "date": "March 26, 2019",
    "review": "I found Cloudzy.com service extremely good. Down time is almost null; cheap and best. Anyone looking for Windows/Linux VPS servers, don’t hesitate, blindly go for it as they are the best in the market."
  },

  {
    "name": "Nova Charlie",
    "rating": "5",
    "date": "March 16, 2019",
    "review": "Hello, Cloudzy is an excellent service provider. Their servers are sturdy. The support staff is too good. Special regards to “Hannan N”, who makes “impossible”, “possible”. He’s a gem of a person. Keep going ….."
  },
  {
    "name": "Lily Benjamin",
    "rating": "5",
    "date": "March 16, 2019",
    "review": "I have been using Cloudzy servers for quite a long time. Never I had an issue with their servers. They provide fast, cheap and flexible plans to select from. Their transactions are transparent and user friendly. The best part of their service is the UPTIME of their servers. If you are a new customer, I suggest you can blindly go for Cloudzy."
  },
  {
    "name": "Par Cruz",
    "rating": "5",
    "date": "March 2, 2019",
    "review": "Cloudzy is the Best VPS provider and i will recommend that to all and to anyone who want a excellent service (Reliable Specs and Internet FAST Speed) , they have also a very very nice friendly support team, in my first vps i had some issues which they resolved it in a fast and efficient way. Thank you,"
  },
  {
    "name": "Clock Booster",
    "rating": "5",
    "date": "March 2, 2019",
    "review": "I will Recommend Cloudzy.com for their excellent services, reliable spec of VPS/instance and Excellent and Friendly Costumer Services. I got a problem about my VPS and i report to them and they response as fast they fixed it ,THUMBS UP for Cloudzy.com nice job !!!"
  },
  {
    "name": "J Mcloughlin",
    "rating": "5",
    "date": "January 31, 2019",
    "review": "Extremely happy with my windows 10 vps There are no faults to mention"
  },
  {
    "name": "Mehedi",
    "rating": "5",
    "date": "January 19, 2019",
    "review": "One of best vps hosting provider . Very good and friendly support . High quality service ."
  },
  {
    "name": "James",
    "rating": "5",
    "date": "January 7, 2019",
    "review": "when it comes to customer care and support Cloudzy clearly is the best, the service is excellent , pricing is so low compared to other , great company great team working there, they really care about the customer, they are fast, no lagging, no disconnecting, I really appreciate this good work , I recommended them whenever someone asks me about a VPS service, keep up the good work Cloudzy Special thanks to ” Hannan N. ” and ” Daria S.” and thanks to all Cloudzy team,"
  },
  {
    "name": "Mitsutaka Matsuno",
    "rating": "5",
    "date": "January 5, 2019",
    "review": "I’ve been using Cloudzy for 6 month. This company is the best. Everytime when I had trouble, this support team solve it immideatly with great communication."
  },
  {
    "name": "Yancarlos Mendez",
    "rating": "5",
    "date": "November 24, 2018",
    "review": "I would recommend Cloudzy to anyone who want a good service who wants a very nice friendly support team, on my first vps i had some issues wich where resolved in less than what i though i have tried more than 10 hosting companys in this year but noone of them did work like Cloudzy my friends i recommend this hosting services 101% you wont regret trust me!!!"
  },
  {
    "name": "Bulut",
    "rating": "5",
    "date": "October 18, 2018",
    "review": "Excellent service — I am very happy with these guys! Tried many providers but these guys really care about their customers!"
  },
  {
    "name": "Allen",
    "rating": "5",
    "date": "October 3, 2018",
    "review": "Cloudzy has been the best vps hosting solution I have used to date. After going through 4 other companies trying to find a home for my gaming community, I found Cloudzy. They have been extremely helpful on providing me what I need to keep my servers up and running for my gaming community. The level of customer service has been above and beyond impeccable. I will be continuing to host with Cloudzy for a long time and plan on expanding once again soon. I currently have 2 vps with them in different locations and both are running amazingly. I will be recommending anyone that needs a dedicated box or vps in the future to use Cloudzy."
  },
  {
    "name": "Kings",
    "rating": "5",
    "date": "October 3, 2018",
    "review": "It’s hard to find affordable VPS hosting service that offer windows. I was looking for such a long time but thank god I finally found these guys. To my surprise, they had the most affordable packages with the greatest value for your money. Great customer service too! Thanks Hannan for helping me with all my questions."
  },
  {
    "name": "Collins Asmanda",
    "rating": "5",
    "date": "September 23, 2018",
    "review": "having tested and used other hosting services, i will really recommend Cloudzy anytime anyday. 100%. their service is second to none and their support…oh..so so great.. great people.. great service."
  },
  {
    "name": "Braden Wilkerson",
    "rating": "5",
    "date": "September 9, 2018",
    "review": "I am very happy with the service and the host, it seems to work well, was commissioned quickly, and i have been supported well, thank you, you have improved my opinion of VPS Services and I will recommend you to friends."
  },
  {
    "name": "Ernest",
    "rating": "5",
    "date": "July 16, 2018",
    "review": "Cloudzy is the best service I’ve ever seen. Quality is great and the support is amazing."
  },
  {
    "name": "Rogger Ladislau",
    "rating": "5",
    "date": "July 2, 2018",
    "review": "Great service, i am really happy !"
  },
  {
    "name": "Sotiris B.",
    "rating": "5",
    "date": "June 17, 2018",
    "review": "10/10 experience. Would recommend."
  },
  {
    "name": "Caroline G.",
    "rating": "5",
    "date": "June 13, 2018",
    "review": "Didn’t have any trouble with windows like I had with other hosting companies (genuine windows). Customer support is great even if I had some self inflicted troubles and they helped me till I sorted it out. So happy!"
  },
  {
    "name": "Klaus",
    "rating": "5",
    "date": "May 9, 2018",
    "review": "Extremely quick support responses, refunded money within half a week on my request"
  },
  {
    "name": "Ravi",
    "rating": "5",
    "date": "April 22, 2018",
    "review": "Genuine Services, and Very good support. I appreciate."
  },

  {
    "name": "David",
    "rating": "5",
    "date": "April 3, 2018",
    "review": "5 star! I had no single downtime with this host"
  },
  {
    "name": "Marko Polo",
    "rating": "5",
    "date": "April 3, 2018",
    "review": "100% Uptime, friendly support, alot of method of payment inculding various cryptocurrencies. The best hosting services i have been working with in the past 10 years. Keep it up!"
  },
  {
    "name": "Mr. Freeman",
    "rating": "5",
    "date": "April 3, 2018",
    "review": "Тут пишут на англиском в основном, но я скажу по-русски – ребята знают свое дело на все 100%, качество услуг выше всяких похвал. За последние полгода не было и единого даунтайма (юзаю впс и дедики), сапорт дружелюбен и всегда идет на встречу, чего еще можно желать?Ханнану, привет! 🙂"
  },
  {
    "name": "Matthias Seys",
    "rating": "5",
    "date": "March 24, 2018",
    "review": "Honestly, I thought it would be another bad host for that price. But no! It surprised me my vps was directly getting set up after paying the invoice. I was surprised and couldn’t wait to access it. Not much later a mail arrived saying the VPS was set up and it mailed the log-in details. Great host, I finally found the needle in the hay!"
  },
  {
    "name": "Juan Cruz",
    "rating": "5",
    "date": "March 22, 2018",
    "review": "( SPANISH )- Todas las reviews estan en ingles, asi que me pareció copado hacerla en español, para el habla hispana. El servicio es excelente. y por sobre todas las cosas, el soporte que tienen es de lo mejor, gente que trata con gente.. no sos un numero mas, sos una persona, y no tienen drama en darte una mano. Se nota que estan comprometidos y quieren que te quedes. Da gusto estar en un lugar asi.. no solo funciona bien, sino que te sentís cuidado. Recomiendo ampliamente!"
  },
  {
    "name": "cp",
    "rating": "5",
    "date": "March 18, 2018",
    "review": "I tested many RDPs. Cloudzy is the best RDP i experienced. Smart people, good support, quality service."
  },
  {
    "name": "Stacy Kelly",
    "rating": "5",
    "date": "March 11, 2018",
    "review": "Normal Process(Other Guys): Talk with Hosting company to solve my issues. Cloudzy.com: No need, everything was intuitive, and worked. Even OS Change took minutes. RemoteDesktop/Putty all worked 1st time. Price is right – I payed with Crypto[Bitcoin] (which I wanted), and you have a loyal customer, with me."
  },
  {
    "name": "Victor",
    "rating": "5",
    "date": "March 9, 2018",
    "review": "I have been in contact with the staff on 3 occasions and every time they have been very friendly and helpfull – even when i stressed out a node!! The longest response time I’ve had was about half an hour, which is just unbelievably fast. Their servers and pricing is umatched! 10/10"
  },
  {
    "name": "Jennifer",
    "rating": "5",
    "date": "February 24, 2018",
    "review": "When my shared hosting told me off because my growing website I had to look for a VPS but I did not know anything about VPS servers so these guys helped me a lot with setting up my website and they have recommended Cyber Control Panel which works great for me. I went for 4GB RAM SSD plan for only $20 per month and it has been working great for me. Thank you guys…"
  },
  {
    "name": "ahemed",
    "rating": "5",
    "date": "January 7, 2018",
    "review": "This is the best company I have dealt with in terms of renting servers Excellent company and excellent support"
  },
  {
    "name": "Seph",
    "rating": "5",
    "date": "January 2, 2018",
    "review": "Best host i have used by far. I started with Cloudzy.com but when i needed to upgrade and they were out of stock i tried 4 separate top name providers. All 4 kicked me off their VPS for using to much. Rouster hosting has some top notch hardware capable of outperforming all other providers i have tired. Their 4Gb/2 Core/80gb in Montreal at under 10$ outperformed turkey’s 12 core vps that i think was 35-40$. Turkey kicked me off within 12 hours and told me i had to upgrade to their dedicated systems. I am now on a 4 Core/ 8GB also in montreal just hours away from where I live. Plus is meant for high resource use and honestly the thing is a tank. Its so fast that i feel like i’m using a fully dedicated workstation. Additionally customer service is great. They were out of stock and brought more online because i needed. Plus when there was (the only) tech issue i ever had with them they fixed all up and didn’t try to make me pay for down time. I can only speak for their windows vps but one of reasons they are impossible to beat on cost is they offer VDS. Not just a plain VPS so resources are actually dedicated to the VS instead of oversold or shared. Plus they offer windows OS without doubling or tripling your rental cost which is a rare exception among providers."
  },
  {
    "name": "JP",
    "rating": "5",
    "date": "December 26, 2017",
    "review": "I have tried many different hosts for my Forex trading. I would say Cloudzy is the best around. Resources for the price is great. Never had a single downtime since I have joined Cloudzy. Many hosts are just overpriced. I highly recommended them +++"
  },
  {
    "name": "Richard Bryant",
    "rating": "5",
    "date": "December 22, 2017",
    "review": "I am running a crypto bot on my VPS. I never had any downtime in last 5 months which I am using Cloudzy. I have a 4gb ssd Windows VPS in Canada."
  },
  {
    "name": "Anonymous",
    "rating": "5",
    "date": "December 21, 2017",
    "review": "Great company"
  },
  {
    "name": "Roger High",
    "rating": "5",
    "date": "December 21, 2017",
    "review": "I am having a VPS with Cloudzy since 2009 (upgraded in 2014) for hosting few projects on it I never had a single issue with the VPS. Performance, Uptime is great. My VPS is located in US. I do recommend them!!"
  },
  {
    "name": "Amanda",
    "rating": "5",
    "date": "December 21, 2017",
    "review": "The staff helped me to host my blog on a vps which advised me how I can use ssl. A friend referred this hosting to me and very happy so far"
  }
];

export const ratingCount = reviews.length;

export const ratingValue = Math.ceil((reviews.reduce((prev, curr) => prev + parseInt(curr.rating, 10), 0) / reviews.length) * 10) / 10;

export default reviews;
