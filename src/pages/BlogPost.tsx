import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Share2, Check } from "lucide-react";
import { useState } from "react";
import worldMapBg from "@/assets/world-map-bg.jpg";

const BlogPost = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  // Handle copy link functionality
  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy link:', err);
      // Could add user-friendly error message here if needed
    }
  };

  // Blog post data - efficiently stored in a single object for dynamic loading
  const blogPosts: Record<string, any> = {
    "1": {
      title: "The Western Intelligence System",
      date: "November 5, 2025",
      category: "Intelligence",
      readTime: "15 min read",
      content: [
        {
          type: "paragraph",
          text: "The Western intelligence structure that took shape during World War II tilted the balance of world power in favor of Western imperialism. It began when British and American codebreaking experts first exchanged their information in 1941. British experts revealed they had broken the German Enigma code while the Americans shared details of Japan's Purple diplomatic cipher. This mutual cooperation crystallized into an agreement that in 1946 became known as the UK-USA Agreement. Under this, American and British intelligence agencies merged into a joint signals intelligence network. Later Canada, Australia, and New Zealand also joined, and this system became known as Five Eyes.",
        },
        {
          type: "paragraph",
          text: "This alliance did not remain limited to information exchange but gradually transformed into a comprehensive surveillance structure. During the Cold War, a vast program called Echelon established surveillance bases around the Soviet Union. These centers began collecting millions of messages daily through ground, air, and satellite sources. As technology advanced, this system spread to telephone, fax, internet, and fiber optic networks. After the end of the Cold War, when the ideological enemy disappeared, Western intelligence agencies turned their attention to terrorism, Middle Eastern conflicts, and emerging powers. This shows that this system works not against any specific enemy but to maintain the monopoly of Western imperialism, at the center of which are the political and economic interests of Western powers.",
        },
        {
          type: "heading",
          text: "The Post-9/11 Transformation",
        },
        {
          type: "paragraph",
          text: "After 2001, this network emerged in a new form. Following 9/11, America, Britain, and their allies opened all their intelligence within NATO's sphere. Secret devices were installed in major telecommunications organizations through which digital activities around the world began to be recorded. Canada introduced new methods of data analysis, surveillance in Middle Eastern regions began from Australian bases, and European countries were also given limited access to this data. The real purpose of this alliance was not to combat terrorism but to maintain information supremacy. In the digital age, the true measure of power now depends on which country holds more and better information.",
        },
        {
          type: "heading",
          text: "Creating a New Hierarchy",
        },
        {
          type: "paragraph",
          text: "This system created a new hierarchy in international relations. Under it, a few countries received the status of second party trust. These were countries that received partial access to the inner circle of Five Eyes. They were trusted to some extent, so it became easier for them to join the Western system. For example, Japan, South Korea, or a few select NATO allies are part of second party trust, while the rest of the world automatically fell into the circle of suspicion. Even countries like France and Germany, which were close allies of the Western world, remained outside this inner circle. This shows that Five Eyes is not just an intelligence network but a civilizational and political alliance whose foundation rests on the mutual ties of the English-speaking world.",
        },
        {
          type: "heading",
          text: "Economic and Technological Control",
        },
        {
          type: "paragraph",
          text: "The effects of this alliance are also deep in the economic and technology fields. When China tried to expand its Huawei network in Europe, America and Britain presented it as a threat to classified information. The result was that most European countries did not give China access to their 5G systems. Apparently this was a commercial decision, but in reality it was about access to classified information and maintaining control over Western data. In this way, the West once again used technology as a tool of political influence.",
        },
        {
          type: "heading",
          text: "The Rise of Counter-Measures",
        },
        {
          type: "paragraph",
          text: "However, this Western success forced non-Western powers to find new methods of defense. Russia restricted its communication lines to the local level and tried to avoid Western surveillance through the satellite system GLONASS. China gained complete control over internet traffic through the Great Firewall so that national data would remain safe from external access. India, Brazil, and South Africa proposed an alternative BRICS cable so that their information would not pass through Western routes. Even in Europe, a project like Gaia-X emerged so that European data could remain safe from American surveillance.",
        },
        {
          type: "paragraph",
          text: "All these measures confirm the reality that the power of information has now become more important than military force. A country that cannot maintain its digital sovereignty cannot run its policy independently either. For the Western world, the real challenge now is not whether it can maintain its secret alliance, but how long it can maintain its technological superiority. Artificial intelligence, quantum computing, and private satellite companies have democratized capabilities that once belonged only to states. An ordinary drone or open-source software can today do work that was previously impossible without a secret agency.",
        },
        {
          type: "heading",
          text: "The Future of Information Power",
        },
        {
          type: "paragraph",
          text: "Finally, it can be said that what began as cooperation in a quiet room at Bletchley Park in 1941 has now become the backbone of global politics. But at the rate information technology is spreading in the world, new challenges are emerging before the West's all-seeing eye at the same rate. Intelligence capability has been a major source of Western monopoly over the past 75 years. If a multipolar world emerges, one reason will be that the West can no longer monopolize information.",
        },
      ],
    },
    "2": {
      title: "Power and Principle: The West's Selective Morality",
      date: "November 4, 2025",
      category: "Geopolitics",
      readTime: "12 min read",
      content: [
        {
          type: "paragraph",
          text: "When examining Western countries' influence on global politics since World War II, a clear contradiction becomes visible. On one hand, the principles of democracy, human rights, and self-determination have been promoted globally. On the other, these same principles have been ignored whenever they clashed with national interests. This double standard is not just a collection of isolated incidents but a structural problem that has remained at the core of Western foreign policy. In the pursuit of power, moral principles have consistently taken a back seat.",
        },
        {
          type: "heading",
          text: "Cold War Contradictions",
        },
        {
          type: "paragraph",
          text: "Clear examples of this behavior can be seen during the Cold War. In the fight against communist ideology, Western powers allied themselves with authoritarian governments that served their interests. Interventions against democratically elected governments in Guatemala, Chile, and Argentina illustrate this clearly. In these countries, democratic institutions were dismantled, and military rulers were installed who carried out brutal actions against their own citizens. The motivation behind these decisions was often economic. Protecting the interests of the United Fruit Company in Guatemala or reacting against the nationalization of oil in Iran are well-known examples.",
        },
        {
          type: "heading",
          text: "The Post-9/11 Alliance System",
        },
        {
          type: "paragraph",
          text: "After 9/11, this pattern did not change. In the name of the war on terror, alliances were built with governments that had some of the worst human rights records in the world. Saudi Arabia, Egypt, and Uzbekistan became key allies despite the absence of democratic institutions and widespread suppression of civil liberties. These actions reveal that Western respect for human rights has always been conditional. When interests are threatened, principles are quickly abandoned.",
        },
        {
          type: "heading",
          text: "The Erosion of Credibility",
        },
        {
          type: "paragraph",
          text: "The consequences of this hypocrisy have been far-reaching. Across the Global South, skepticism toward Western claims of moral leadership has grown. The credibility of Western countries on international platforms has been eroded. Worse still, these policies have strengthened dictatorships and deepened public disillusionment with the idea that democracy and human rights are universal values rather than political tools.",
        },
        {
          type: "heading",
          text: "Contemporary Double Standards",
        },
        {
          type: "paragraph",
          text: "This contradiction continues today. The stark difference between Western outrage over the Ukraine war and silence during the Gaza crisis exposes these double standards yet again. The unconditional support for Israel while ignoring Palestinian human rights shows that strategic interests outweigh moral concerns. Similarly, silence on the violations of minority rights in India stands in sharp contrast to strong statements against China.",
        },
        {
          type: "heading",
          text: "The Path Forward",
        },
        {
          type: "paragraph",
          text: "A closer look at these patterns makes one thing clear. Western respect for human rights is an idea that repeatedly fails in practice. The fundamental reason is the obsession with maintaining power and control, even at the expense of moral integrity. For the future of humanity, there must be alignment between principle and action. Unless balance is restored between power and ethics, tragedies like Rwanda, Sudan, and Gaza will keep recurring.",
        },
      ],
    },
    "3": {
      title: "Sacred Alliances: West's Use of Religion as a Weapon",
      date: "November 3, 2025",
      category: "Religion & Politics",
      readTime: "13 min read",
      content: [
        {
          type: "paragraph",
          text: "The Cold War era presents a unique example of the use of religion in international relations, where Western powers used religious sentiments and institutions as weapons to achieve their geostrategic objectives. This process was not merely a series of incidents but an organized and calculated strategy whose effects can be felt even today. Examining the motivations behind this policy, its implementation methodology, and the structural changes it produced clarifies how religion was presented as an important element of global politics.",
        },
        {
          type: "heading",
          text: "The Two-Pronged Religious Strategy",
        },
        {
          type: "paragraph",
          text: "In the early years of the Cold War, the Soviet Union's atheistic ideology created an opportunity for Western powers to use religion as a powerful weapon against communism. To achieve this goal, America worked with two different religious forces in two different regions. In Europe, the Catholic Church and the Pope were used as spiritual allies, while in the Middle East and South Asia, a specific interpretation of Islam was cultivated as a shield against communism. The fundamental purpose of this two-pronged strategy was to stop Soviet influence, even if it meant encouraging any kind of religious tendencies.",
        },
        {
          type: "heading",
          text: "The Pivotal Year of 1979",
        },
        {
          type: "paragraph",
          text: "The year 1979 proved to be an important turning point in this regard when on one hand Pope John Paul II's visit to Poland gave birth to a popular movement, and on the other hand the jihad against the Soviet Union in Afghanistan received international support. A clear similarity exists between these two events. In both cases, religion was used to mobilize popular sentiments, and in both matters Western powers played an active role in the process. In Poland, popular resistance was strengthened through the Catholic Church, while in Afghanistan the mujahideen were provided financial and military aid. The logic was simple, to fight communism on every possible front, even if it meant empowering ideologies that might later clash with Western values.",
        },
        {
          type: "heading",
          text: "Structural Changes and Consequences",
        },
        {
          type: "paragraph",
          text: "The structural changes that resulted from this policy proved extremely far-reaching. Support for the mujahideen in Afghanistan actually gave birth to a militant movement that later took the form of global terrorism. Madrasas established in Pakistan with Saudi Arabia's financial assistance not only provided military personnel for the Afghan jihad but also cultivated a religious mindset based on extremism. In contrast, the movement based on religion in Poland succeeded in achieving its objectives in a relatively peaceful manner. Analyzing this contradiction, the conclusion can be drawn that the results of using religion as a weapon depend on the political and cultural structure of that region.",
        },
        {
          type: "heading",
          text: "Post-Cold War Legacy",
        },
        {
          type: "paragraph",
          text: "Even after the end of the Cold War, religion remained an important element of international relations. The Taliban government was established in Afghanistan and organizations like al-Qaeda came into being. And then the excuse was found to start a new war in the name of eliminating these organizations.",
        },
        {
          type: "paragraph",
          text: "The religious tendencies that Western powers encouraged during the Cold War for temporary gain later became a problem for the entire world. The victory against the Soviet Union in Afghanistan actually began a new era of global terrorism.",
        },
        {
          type: "heading",
          text: "The Contemporary Challenge",
        },
        {
          type: "paragraph",
          text: "Even in the current era, religion is playing an important role in international relations. Terrorist organizations in the Middle East and Afghanistan are declaring themselves religious warriors. People say that Western countries should review their policies regarding religion from scratch and should properly assess the possible consequences before using religion for political purposes. But the question is, will the West do this? The West's monopoly was established through the political use of religion.",
        },
      ],
    },

    "weaponized-economics": {
      title: "West's Weaponized Economics: How sanctions shape and shatter nations",
      date: "November 5, 2024",
      readTime: "10 min read",
      content: [
        {
          type: "paragraph",
          text: "The use of sanctions in international relations is far older than the modern era, but in the twentieth century this weapon emerged as an organized and powerful tool of Western foreign policy. The fundamental purpose of sanctions has been to change the behavior of nations, but over time they have also become a means of political pressure, economic warfare, and even regime change operations.",
        },
        {
          type: "heading",
          text: "Cold War Foundations",
        },
        {
          type: "paragraph",
          text: "During the Cold War, the West's use of sanctions became a key part of ideological warfare. This practice had begun as early as 1948. American sanctions on Cuba in 1960 are a prime example, and these sanctions continue to this day, having devastating effects on Cuba's economy and shaping its political isolation.",
        },
        {
          type: "heading",
          text: "Post-Cold War Evolution",
        },
        {
          type: "paragraph",
          text: "After the Cold War, the application of this economic weapon evolved. The sanctions imposed by the United Nations on Iraq after its 1990 invasion of Kuwait were among the most comprehensive in history. As a result, the Iraqi economy was shattered and the lives of ordinary citizens were severely affected. According to estimates, more than five hundred thousand children suffered from food shortages and medicine scarcity caused by the sanctions. This humanitarian crisis forced a rethinking, giving birth to the concept of smart sanctions, which aimed to target the ruling elite rather than ordinary people.",
        },
        {
          type: "heading",
          text: "The Post-9/11 Financial Arsenal",
        },
        {
          type: "paragraph",
          text: "In the post-9/11 era, the scope of Western financial power expanded further. In the war against terrorism, America introduced a new system of financial sanctions. Pressure was put on banks worldwide to monitor suspicious transactions and freeze accounts linked to terrorist groups. The sanctions imposed on Iran to stop its nuclear program are another example of this weaponized economics, used to force a diplomatic agreement in 2015. But in 2018, America unilaterally withdrew from this agreement and reimposed sanctions, demonstrating the fluid and unilateral nature of this tool.",
        },
        {
          type: "heading",
          text: "Selective Application and Double Standards",
        },
        {
          type: "paragraph",
          text: "There is disagreement among experts about the effects of these economic measures. In some cases, such as ending racial discrimination in South Africa, sanctions were successful, while in other cases, such as North Korea or Venezuela, they have failed to achieve desired results. Political interests are clearly visible in the selection of targets. Despite human rights violations, sanctions are not imposed on allied countries like Saudi Arabia or Israel, while strict sanctions are imposed on enemy countries for minor violations.",
        },
        {
          type: "heading",
          text: "Humanitarian Consequences",
        },
        {
          type: "paragraph",
          text: "The humanitarian effects of sanctions are extremely deep. Access to medicine and food for ordinary citizens is affected. Health systems weaken and mortality rates increase. Economies downsize, employment opportunities decrease, and poverty increases. All these factors together create public discontent, but this discontent not only fails to always cause rebellion against governments but is also becoming a cause of anger against the external powers imposing sanctions. People are beginning to understand these political tactics.",
        },
        {
          type: "heading",
          text: "Contemporary Applications",
        },
        {
          type: "paragraph",
          text: "In the current era, sanctions have become a permanent part of the West's geopolitical playbook. The sanctions imposed on Russia over the Ukraine war and technology sanctions against China are recent examples of this. The use of this economic weapon is likely to increase further in the future, especially as new methods of digital sanctions are being introduced.",
        },
        {
          type: "paragraph",
          text: "However, the fundamental question remains whether they are a legitimate tool for enforcing international norms or a potent instrument of power that disproportionately shatters the lives of innocent citizens, shaping global order through collective punishment.",
        },
      ],
    },

    "debt-dependency": {
      title: "Debt and Dependency: The Real Price of International Financial Aid",
      date: "November 5, 2024",
      readTime: "11 min read",
      content: [
        {
          type: "paragraph",
          text: "When the Bretton Woods Conference laid the foundation for a new international financial system at the end of World War II, the stated goal was straightforward. Rebuild war-torn nations and ensure global economic stability. But it didn't take long for these institutions to become key instruments of Cold War geopolitics. The International Monetary Fund and the World Bank began attaching conditions to the loans they offered developing countries, packaging them under the banner of Structural Adjustment Programs. The requirements were consistent. Cut government spending, privatize state assets, open your markets. In practice, these policies became a mechanism for protecting Western economic interests.",
        },
        {
          type: "heading",
          text: "The Oil Crisis and Debt Spiral",
        },
        {
          type: "paragraph",
          text: "The oil crises of the 1970s pushed many developing nations into a debt spiral. The IMF stepped in with bailout packages, but the strings attached were tight. In Latin America, countries like Mexico, Brazil, and Argentina had little choice but to accept the terms. End subsidies. Remove import barriers. Devalue your currency. The results were predictable. Poverty deepened, and local industries couldn't survive the flood of international competition. In Asia, the Philippines offered another example. During the Marcos era, American military bases stayed operational as part of the bargain for debt relief.",
        },
        {
          type: "heading",
          text: "Post-Cold War Shock Therapy",
        },
        {
          type: "paragraph",
          text: "After the Soviet Union collapsed in the 1990s, Eastern European countries were offered similar programs under the label of 'shock therapy.' Russia and others launched sweeping privatization drives that created a new class of wealthy oligarchs while ordinary people saw their living standards collapse. In Africa, the Structural Adjustment Programs of that era devastated education and healthcare systems as governments were forced to slash spending in those very sectors.",
        },
        {
          type: "heading",
          text: "Political Consequences and Social Unrest",
        },
        {
          type: "paragraph",
          text: "The political consequences ran deep. Loan conditions stripped away policy independence. Governments found themselves serving the demands of creditors rather than the needs of their own people. Public anger erupted in many places, sometimes violently. The Caracazo riots in Venezuela in 1989 were one such moment. Protesters took to the streets against rising fuel prices, and the military opened fire.",
        },
        {
          type: "heading",
          text: "Contemporary Manifestations",
        },
        {
          type: "paragraph",
          text: "In the twenty-first century, the pattern has taken new forms. Western nations have rolled out initiatives like Build Back Better World.",
        },
        {
          type: "heading",
          text: "The Sovereignty Crisis",
        },
        {
          type: "paragraph",
          text: "The long-term effects of these financial practices have not only shaped the political and economic structures of developing countries but undermined their sovereignty. Even today, many nations spend a huge portion of their budgets servicing debt, leaving little room for development projects. The international financial system desperately needs reform. The world needs a system that offers developing countries loans on fairer terms if poverty is ever to be eliminated. The race to become richer and richer must end, and with it, the persistence of poverty itself.",
        },
      ],
    },

    "convenient-tyrants": {
      title: "Convenient Tyrants: How Western Support for Dictators Undermined Democracy",
      date: "November 5, 2024",
      readTime: "9 min read",
      content: [
        {
          type: "paragraph",
          text: "Western powers claiming to champion democratic values have consistently provided political, military, and economic support to authoritarian governments to protect their own interests. These relationships were not limited to temporary alliances but actively shaped the global balance of power in ways whose effects can still be felt today.",
        },
        {
          type: "heading",
          text: "Cold War Foundations of Dictatorial Support",
        },
        {
          type: "paragraph",
          text: "In the 1950s, this trend became clear in Latin America when the United States supported Guatemala's military ruler Carlos Castillo Armas. In the following decades, this policy continued with covert support for Augusto Pinochet's military coup in Chile. This resulted in a seventeen-year dictatorship during which thousands of civilians were tortured or disappeared. During the same period in the Middle East, the United States strongly supported Iran's Shah Mohammad Reza Pahlavi. His secret police SAVAK tortured thousands of Iranian citizens.",
        },
        {
          type: "heading",
          text: "Global Network of Convenient Allies",
        },
        {
          type: "paragraph",
          text: "In Asia, Indonesia's President Suharto enjoyed full support from Western countries despite the massacres of millions that occurred during his rule. Suharto's government was considered a crucial ally against communism during the Cold War. Similarly, in Africa, Zaire's President Mobutu Sese Seko received unwavering Western support. He ruled for three decades while looting billions of dollars from the national treasury for personal use.",
        },
        {
          type: "heading",
          text: "The Anti-Communist Alliance",
        },
        {
          type: "paragraph",
          text: "The West accepted any ally in the war against communism. A long list of dictators received comprehensive support from America and its Western allies. This list included General Ayub Khan, General Zia-ul-Haq, General Park Chung-hee, Suharto, Ferdinand Marcos, and Augusto Pinichet. They were given military, financial, political, and diplomatic support of every kind. Western powers backed monarchs around the world and, when it suited their aims, even provided assistance to terrorist groups.",
        },
        {
          type: "heading",
          text: "Post-9/11 Continuity",
        },
        {
          type: "paragraph",
          text: "This trend did not end with the Cold War. After the 9/11 attacks, in the name of the war on terror, the United States cooperated with rulers like Uzbekistan's Islam Karimov, Pakistan's General Pervez Musharraf, and Egypt's General Abdel Fattah el-Sisi. This cooperation continued despite serious human rights violations under their rule. This pattern has reached a point where Western countries have now established a partnership with Syria's new ruler, Abu Mohammad al-Julani. He was until recently declared a terrorist with a price on his head. The United States removed al-Julani from its terrorist list only this year.",
        },
        {
          type: "heading",
          text: "The Democratic Deficit",
        },
        {
          type: "paragraph",
          text: "As a result of these relationships, democracy and democratic institutions weakened around the world. Civil societies were crushed, while military and political bureaucracies consolidated their grip on power. Economic inequality increased in most client states, and control over natural resources was concentrated in the hands of a small elite. This double standard in international relations has severely weakened the moral authority of Western countries and sown deep distrust against them in the Global South.",
        },
        {
          type: "paragraph",
          text: "If Western powers cannot establish a better balance between their professed principles and their strategic interests, the future of democracy will grow increasingly dark.",
        },
      ],
    },
  };

  const post = blogPosts[id || "1"] || blogPosts["1"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blogs"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to all insights
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center justify-between pb-8 mb-8 border-b border-border animate-fade-in">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <Button variant="secondary" size="sm" onClick={handleCopyLink}>
                {copied ? (
                  <Check className="w-4 h-4 mr-2" />
                ) : (
                  <Share2 className="w-4 h-4 mr-2" />
                )}
                {copied ? 'Copied!' : 'Share'}
              </Button>
            </div>

            {/* Featured Image / Background */}
            <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden animate-fade-in-slow">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url(${worldMapBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background/80" />
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-invert max-w-none animate-fade-in-slow">
              {post.content.map((section: any, index: number) => {
                if (section.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-bold text-foreground mt-12 mb-6"
                    >
                      {section.text}
                    </h2>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-lg text-foreground/90 leading-relaxed mb-6"
                  >
                    {section.text}
                  </p>
                );
              })}
            </div>

            {/* CTA Box */}
            <div className="mt-16 p-8 bg-secondary/30 border border-accent/20 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to dive deeper into these topics?
              </h3>
              <p className="text-foreground/80 mb-6">
                The upcoming e-book provides comprehensive analysis with extensive 
                documentation, case studies, and strategic frameworks for understanding 
                modern geopolitical operations.
              </p>
              <Button size="lg">
                Pre-Order the E-Book
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
