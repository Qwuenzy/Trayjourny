 import mountfuji from "../public/images/japanimg.jpeg"
 import everest from "../public/images/canadaimg.jpeg"
 import china from "../public/images/wallofchina.jpeg"
 import bridge from "../public/images/ukimg.jpeg"
 const Bodycontent = [
    {
        id:1,
        Location: "japan",
        LocName: "Mount Fuji",
        Loclink: "https://www.google.com/search?q=mount+fuji&sca_esv=3a312d9b2e564329&sxsrf=AE3TifMjk_YXB7C3HE1S0nJK9F3PCXAFBw%3A1764656395653&ei=C4Uuaf_SJ8_PhbIPkte40QM&ved=0ahUKEwi_hPSsoZ6RAxXPZ0EAHZIrLjoQ4dUDCBE&uact=5&oq=mount+fuji&gs_lp=Egxnd3Mtd2l6LXNlcnAiCm1vdW50IGZ1amkyBBAjGCcyDRAuGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgoQABiABBgUGIcCMgoQABiABBgUGIcCSJARUPMDWNsKcAF4AZABAJgBpQOgAdwEqgEHMC4xLjQtMbgBA8gBAPgBAZgCA6ACmAXCAgoQABiwAxjWBBhHwgIKEC4YgAQYQxiKBZgDAIgGAZAGCJIHBzEuMS40LTGgB-4RsgcHMC4xLjQtMbgHiwXCBwcyLTEuMS4xyAcu&sclient=gws-wiz-serp",
        Date: "12 jan, 2021 - 24 jan, 2021",
        Content: "Mount Fuji, an active and exceptionally symmetrical stratovolcano on Honshu and Japan’s highest peak at 3,776.24 m, is a nationally iconic and culturally significant landmark visible from Tokyo, renowned for its snow-capped cone, artistic and spiritual influence, and its UNESCO World Heritage designation for the 25 sites it encompasses, including the Fujisan Hongū Sengen Taisha shrine.",
        Image: `${mountfuji}`
    },
    {
        id:2,
        Location: "Asia",
        LocName: "Mountain Everest",
        Loclink: "https://www.google.com/search?gs_ssp=eJzj4tDP1TdIyklKMWD0Yk8tSy1KLS4BADjaBiI&q=everest&oq=everes&gs_lcrp=EgZjaHJvbWUqEggAEC4YQxjUAhixAxiABBiKBTISCAAQLhhDGNQCGLEDGIAEGIoFMgwIARAAGEMYgAQYigUyEggCEC4YQxjUAhixAxiABBiKBTIMCAMQABhDGIAEGIoFMgcIBBAAGIAEMgcIBRAAGIAEMg0IBhAuGK8BGMcBGIAEMgcIBxAAGIAEMgYICBBFGDkyDQgJEC4YrwEYxwEYgATSAQg4NDg1ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
        Date: "12 jan, 2021 - 24 jan, 2021",
        Content: "Mount Everest, known locally as Sagarmatha in Nepal and Qomolangma in Tibet and rising 8,848.86 m as Earth’s highest mountain on the China–Nepal border, is a famed yet perilous climbing destination with routes from both Nepal and Tibet, extreme hazards such as altitude sickness and avalanches, a long history of exploration and tragedy, and a legacy of notable ascents from early British expeditions to the first confirmed summit by Tenzing Norgay and Edmund Hillary in 1953.",
        Image: `${everest}`
    },
    {
        id:3,
        Location: "China",
        LocName: "The Great Wall Of China",
        Loclink: "https://www.google.com/search?q=great+wall+of+china+photos&sca_esv=3a312d9b2e564329&sxsrf=AE3TifOskDyTBBXmq4YAGof2QczC5ouvvg%3A1764656662080&ei=FoYuadTWBN2XhbIPq76i8AI&oq=grewall+of+china&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGdyZXdhbGwgb2YgY2hpbmEqAggDMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5IjypQqgVYxQ1wAXgBkAEAmAH2AqAB-AaqAQUyLTIuMbgBAcgBAPgBAZgCBKACtQfCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAgcQIxiwAhgnmAMAiAYBkAYSugYGCAEQARgJkgcHMS4wLjIuMaAH0xuyBwUyLTIuMbgHpQfCBwUyLTEuM8gHMA&sclient=gws-wiz-serp",
        Date: "12 jan, 2021 - 24 jan, 2021",
        Content: "The Great Wall of China began as separate fortifications built by rival states and later unified by Qin Shi Huang to defend against Inner Asian nomads, then expanded, rebuilt, or abandoned by successive dynasties depending on their frontier strategies, ultimately becoming the largely Ming-era stone-and-brick structure seen today—an enduring cultural symbol shaped by geography, warfare, administrative organization, and centuries of both preservation and decay.",
        Image: `${china}`
    },
    {
        id:4,
        Location: "United Kingdom",
        LocName: "The London Bridge",
        Loclink: "https://www.google.com/search?q=london+bridge&oq=london+brid&gs_lcrp=EgZjaHJvbWUqDAgAEAAYQxiABBiKBTIMCAAQABhDGIAEGIoFMgwIARAAGEMYgAQYigUyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBggFEEUYOTINCAYQLhivARjHARiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDYxMzhqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8",
        Date: "12 jan, 2021 - 24 jan, 2021",
        Content: "London Bridge, a site of successive crossings over the Thames since the Romans first built a timber bridge around AD 50, has evolved through medieval stone structures lined with houses, a 19th-century arched replacement, and the present 1973 concrete-and-steel box girder bridge—which now carries the A3 road, is maintained by Bridge House Estates, and remains a culturally significant landmark depicted in art, literature, and song.",
        Image: `${bridge}`
    }
]

export default Bodycontent;