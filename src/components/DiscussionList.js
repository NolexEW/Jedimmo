import DiscussionCard from "@/components/ui/DiscussionCard";

function generateStarWarsGroupName(seed) {
    const adjectives = ["Galactic", "Imperial", "Rebel", "Jedi", "Sith", "Clone", "Starry", "Cosmic", "Interstellar", "Fierce"];
    const nouns = ["Alliance", "Empire", "Order", "Rebellion", "Squadron", "Council", "Force", "League", "Squad", "Resistance"];

    // Générateur de nombres pseudo-aléatoires basé sur une graine (seed)
    function pseudoRandom(seed) {
        let value = seed;
        return function() {
            const x = Math.sin(value++) * 10000;
            return x - Math.floor(x);
        };
    }

    const random = pseudoRandom(seed);

    const randomAdjective = adjectives[Math.floor(random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(random() * nouns.length)];

    return randomAdjective + " " + randomNoun;
}

export default function DiscussionsList(props) {
    return (
        <section className="w-1/3 overflow-y-scroll max-h-full">
            {props.discussions.map((discussion, index) => (
                <a href={`/discussions/${props.discussions[index]}`} key={index}>
                    <DiscussionCard title={'('+props.discussions[index]+')'+generateStarWarsGroupName(props.discussions[index])} />
                </a>
            ))}
        </section>
    );
}
