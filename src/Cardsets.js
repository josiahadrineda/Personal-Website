import CardItem from './components/CardItem'

const studentCardset = [
    [
        <CardItem 
            key="Me"
            src="images/student/self.jpg"
            text="A ~very endearing~ self portrait"
            label="Just Me"
            path="https://linkedin.com/in/josiah-adrineda-2250481a6"
        />
    ],
    [
        <CardItem 
            key="GDD"
            src="images/student/gdd.png"
            text="Game Design and Development @ Berkeley"
            label="GDD"
            path="https://gamedesign.berkeley.edu/"
        />,
        <CardItem 
            key="SAAS"
            src="images/student/saas.png"
            text="Student Association for Applied Statistics @ Berkeley"
            label="SAAS"
            path="https://saas.berkeley.edu/"
        />
    ]
]

const developerCardset = [
    [
        <CardItem 
            key="Fire Talk"
            src="images/developer/firetalk.png"
            text="An on-the-ground live feed of updates to keep you prepared for the worst!"
            label="Fire Talk"
            path="https://firetalk.io"
        />
    ]
]

const gameCreatorCardset = [
    [
        <CardItem 
            key="Dungeonlite Duelers"
            src="images/game creator/dungeonliteduelers.png"
            text="A pixelated, sci-fi, rogue-like battle royale soon to be released on Steam!"
            label="Dungeonlite Duelers"
            path="https://www.youtube.com/watch?v=BvCkC4JqId8&ab_channel=PixelPerfectStudios"
        />,
        <CardItem 
            key="Secret Satan"
            src="images/game creator/secretsatan.png"
            text="The corrupt, clue-based puzzle card game available on Itch!"
            label="Secret Satan"
            path="https://luxbulbus.itch.io/secret-satan"
        />
    ]
] 
const composerCardset = [
    [
        <CardItem 
            key="Dungeonlite Duelers OST"
            src="images/composer/vector.jpg"
            text="(Unreleased) Dungeonlite Duelers Soundtrack"
            label="Dungeonlite Duelers OST"
            path="https://drive.google.com/drive/folders/1HLdtismo0fRQQ56rmBM0zcTZj7dbns6_?usp=sharing"
        />,
        <CardItem 
            key="Christmas Time Is Here"
            src="images/composer/christmastimeishere.jpg"
            text='A fast-paced, jazz rendition of "Christmas Time Is Here" by Vince Guaraldi'
            label="Christmas Time Is Here"
            path="https://www.youtube.com/watch?v=gkkS44Robaw&ab_channel=JosiahAdrineda"
        />
    ]
]

const transcriberCardset = [
    [
        <CardItem 
            key="Discovery of Gravitation"
            src="images/transcriber/gravityrush.jpg" 
            text="Discovery of Gravitation by Kohei Tanaka" 
            label="Gravity Rush/Daze" 
            path="https://www.youtube.com/watch?v=U7S4ZV7Mdkg&ab_channel=JosiahAdrineda"
        />,
        <CardItem 
            key="Fossil Falls"
            src="images/transcriber/supermarioodyssey.jpg" 
            text="Fossil Falls (Cascade Kingdom) by Naoto Kubo" 
            label="Super Mario Odyssey" 
            path="https://www.youtube.com/watch?v=Arvs8IBdTq0&ab_channel=JosiahAdrineda"
        />
    ]
]

export {
    studentCardset,
    developerCardset,
    gameCreatorCardset,
    composerCardset,
    transcriberCardset
}