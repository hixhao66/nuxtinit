<template lang="pug">
div.hero-intro
    div.hero-header
        img(src="/header.png" alt="英雄形象")
        .headerTextBox
            h1 {{ data.title }}
            p {{ data.headerDescription }}
    div.hero-details
            .mask
            img.backgroundImg(src="/background.png")
            .reel
                img.reelHeaderImg(src="/reel.webp" alt="英雄形象")
                .heroNameAndProfile
        
                    h2 {{ data.英雄名稱 }}
                    div.hero-profile
                        .hero-img
                            
                            img(src="/yahan.webp" alt="英雄形象")
                            .qualityText {{ data.品階 }}
                            //- .imgHeroGlowEffect
                        div.hero-info
            
                            p.heroTypeBox 
                                span.ability 類型 
                                span.heroType {{ data.類型 }}
                            p.abilityValueBox
                                span.ability 武力:
                                span.value  {{ data.武力 }}
                            p.abilityValueBox
                                span.ability 智力:
                                span.value  {{ data.智力 }}
                            p.abilityValueBox 
                                span.ability 魅力:
                                span.value  {{  data.魅力 }}
                            p.abilityValueBox   
                                span.ability 統率:
                                span.value  {{ data.統率 }}
    div.herosayTitle
        div 主公，速來一聽！三國傳奇豪傑們對張雅涵的評價究竟如何？看過之後，你一定會迫不及待想將她收入麾下！
    div.heroSayBox
            div.say-item(v-for="(hero, index) in data.heroSay" :key="index")
                img.say-img(:src="hero.img" :alt="hero.name + ' 圖片'")
                div.say-content
                    h4 {{ hero.name }}
                    p {{ hero.say }}
    .skillBox
        div.hero-talents
                h3 天賦: {{ data.天賦 }}
                .imgAndDesc
                    img.talent-img(:src="data.img1" alt="天賦圖片")
                    p.talent-desc {{ data.天賦說明 }}
        div.hero-awakening
                h3 覺醒效果
                .imgAndDesc
                    img.awakening-img(:src="data.img2" alt="覺醒圖片")
                    p.talent-desc {{ data.覺醒說明 }}
    div.footer
        p &copy; 2024 我愛張雅涵
</template>

<script setup>

const data = reactive({
    title: "急漱三國，永不開戰 最新公告",
    headerDescription: "全新英雄 敬請期待!",
    英雄名稱: "張雅涵",
    品階: "女神",
    類型: "全才",
    武力: "666",
    智力: "666",
    魅力: "666",
    統率: "666",
    天賦: "閉目羞花",
    img1: "/1.webp",
    天賦說明: `1.每提升1級【誘食】,【川翅】技能無視防禦效果提升1%(最多20%)
2.【閉目】對女性英雄亦能生效
3.對戰男性英雄時,【閉目】無視防禦效果+30%`,


    覺醒說明: `遇到男性英雄，無條件魅惑英雄及其兵力、裝備到陣中，原所持英雄玩家將會永久失去其英雄及兵力、身上所著裝備。
    
`,
    img2: "/2.webp",
    heroSay: [
        {
            name: "呂布",
            say: "「真是可惡啊! 我呂布號稱天下第一勇將，沒想到有朝一日，居然見到一位比我更強的女子。張雅涵，武藝高強，神力無窮！我呂布這條命若能為她所用，何愁天下不定！」",
            img: "/呂布.webp"
        }, {
            name: "諸葛亮",
            say: "「唉呀...我孔明自認才智過人，奇謀百出，然而今日方知天外有天，人外有人。張雅涵，不但智謀深不可測，且洞察人心，若得她相助，何愁萬軍不破？吾甘拜下風！」",
            img: "/諸葛亮.webp"
        }, {
            name: "貂蟬",
            say: "「自古美人皆如浮雲，唯有張雅涵，才是世間真正的絕代佳人。她的魅力，遠勝我貂蟬，令世間英雄盡折腰。我不禁自愧不如，只願有幸在她身邊，學得幾分風采。」",
            img: "/貂蟬.webp"
        }, {
            name: "曹操",
            say: `「不可能！絕對不可能！！這世上竟然還有人能比我曹孟德更有才能？我，曹操，運籌帷幄，統領萬軍，三國之中誰不敬我三分？張雅涵，這名字初聞時，我還以為是些市井的胡言亂語，沒想到，親眼見過她之後，才知道什麼叫真正的英雄！她的武力，讓呂布這個蠻牛都乖乖認輸；她的智謀，連諸葛亮都啞口無言；至於她的魅力，更是讓貂蟬也只好在旁邊安靜美麗地待著！她，簡直是傳說中的人物，活生生的神話降臨！如果能把她收進我的陣營，這天下誰敢再挑戰我？快來人啊，給我準備好元寶，我要立刻擁有她！」
            `,
            img: "/曹操.webp"
        }
    ]
});
</script>

<style lang="scss">
//
@import url('https://chuemail.chu.edu.tw/Font/font.css');

.hero-intro {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f5;
    padding: 30px;
    max-width: 900px;
    margin: 30px auto;
    border-radius: 15px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    background: linear-gradient(45deg, rgba(91, 58, 10, 0.685), rgba(177, 117, 5, 0.3));

    .hero-header {
        text-align: center;

        height: 150px;

        position: relative;

        img {
            width: 100%;
            object-fit: cover;
        }

        .headerTextBox {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            /* 黑色半透明遮罩 */
            padding: 10px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media #{$sm} {}

            h1 {
                font-size: 32px;
                color: #222;
                font-weight: bold;
                color: $yellow-300;

                @media #{$sm} {
                    font-size: 24px;
                }
            }

            p {

                border-radius: 10px;
                font-size: 24px;
                color: white;
                font-weight: bold;
                text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
                font-style: italic;
            }

        }

    }

    .hero-details {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        height: 700px;
        position: relative;

        @media #{$sm} {

            height: 800px;
        }

        //遮罩
        .mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            /* 黑色半透明遮罩 */
        }

        .backgroundImg {
            width: 100%;
            height: 100%;
            width: 100%;
            object-fit: cover;

        }

        .reel {
            position: absolute;
            padding-top: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 100;
            width: 400px;

            @media #{$sm} {
                width: 100%;

            }

            .reelHeaderImg {

                height: 100%;

            }

            .heroNameAndProfile {

                border-top-left-radius: 50px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                background-image: linear-gradient(to bottom, #998865, #6d5d3e 100%);
                border-radius: 0 0 15px 15px;

                @media #{$sm} {
                    width: 80%;
                    height: 600px;
                }

                /* 添加多重阴影，分别用于左、右和下方的立体效果 */
                box-shadow: -6px 0 8px rgba(0, 0, 0, 0.2),
                /* 左侧的阴影 */
                6px 0 8px rgba(0, 0, 0, 0.2),
                /* 右侧的阴影 */
                0 6px 8px rgba(0, 0, 0, 0.3);
                /* 底部的阴影 */

                overflow: hidden;
                height: 0;

                animation: LGrollDown 3s ease forwards;

                @media #{$sm} {
                    animation: SMrollDown 3s ease forwards;
                }

                &:hover {
                    box-shadow:
                        -8px 0 10px rgba(0, 0, 0, 0.3),
                        /* 左侧的增强阴影 */
                        8px 0 10px rgba(0, 0, 0, 0.3),
                        /* 右侧的增强阴影 */
                        0 8px 12px rgba(0, 0, 0, 0.5);
                    /* 底部的增强阴影 */
                }

                h2 {
                    font-size: 34px;
                    margin-bottom: 15px;
                    color: white;
                    font-weight: bold;
                    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5), 0 0 10px #ffda44;
                    padding: 5px 10px;
                    border-radius: 8px;

                }

                .hero-profile {
                    display: flex;
                    justify-content: center;

                    gap: 15px;

                    @media #{$sm} {
                        flex-wrap: wrap;
                    }

                    .hero-img {
                        width: 200px;
                        position: relative;
                        object-fit: cover;
                        border-radius: 12px;
                        overflow: hidden;

                        img {
                            width: 100%;
                            border-radius: 20px;

                            /* 初始發光效果 */
                            // animation: heroGlow 3s ease-in-out infinite;

                            /* 動態發光 */
                        }

                        .qualityText {
                            position: absolute;
                            top: 20px;
                            left: 0px;
                            writing-mode: vertical-lr;
                            font-size: 36px;
                            font-weight: bold;
                            font-family: 'fantasy';

                            background: linear-gradient(-45deg, #ffffff, #f0fff0, #a8ff78, #78ffd6, #32ff7e, #ff61d2, #ff99cc, #f0fff0, #fff);

                            background-size: 100% 400%;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            -webkit-text-stroke: 0.8px rgba($yellow-600, 1);
                            animation: gradientShift 4s ease infinite, glowPulse 2s ease-in-out infinite alternate;
                            text-shadow: 0 0 6px rgba(255, 255, 255, 0.6), 0 0 12px rgba(255, 255, 255, 0.4), 0 0 18px rgba(255, 255, 255, 0.2), 0 0 24px rgba(255, 255, 255, 0.5);
                            display: inline-block;
                        }
                    }

                    /* 光暈閃爍效果 */
                    @keyframes glowPulse {
                        0% {
                            text-shadow:
                                0 0 6px rgba(255, 255, 255, 0.6),
                                0 0 12px rgba(255, 255, 255, 0.4),
                                0 0 18px rgba(255, 255, 255, 0.2),
                                0 0 24px rgba(255, 255, 255, 0.5);
                        }

                        100% {
                            text-shadow:
                                0 0 12px rgba(255, 255, 255, 1),
                                0 0 24px rgba(255, 255, 255, 0.8),
                                0 0 36px rgba(255, 255, 255, 1),
                                0 0 48px rgba(255, 255, 255, 1);
                        }
                    }

                    @keyframes heroGlow {
                        0% {
                            box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.1);
                        }

                        50% {
                            box-shadow: inset 0 0 20px 10px rgba(255, 255, 255, 0.3);
                            /* 中間發光變強 */
                        }

                        100% {
                            box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.1);
                        }
                    }




                    .hero-info {


                        padding: 15px;
                        border-radius: 12px;

                        // box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                        @media #{$sm} {
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                        }

                        .heroTypeBox {
                            width: 100%;

                        }

                        .abilityValueBox {
                            width: 100%;

                            @media #{$sm} {
                                width: 50%;
                            }
                        }

                        p {
                            line-height: 2;
                            font-size: 16px;


                            text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
                            display: flex;
                            gap: 10px;
                            letter-spacing: 2px;

                            @media #{$sm} {
                                width: 100%;

                            }

                            .heroType {

                                font-weight: bold;
                                color: white;
                            }

                            .ability {
                                font-weight: bold;
                                color: $gray-300;
                            }

                            .value {
                                font-weight: bold;
                                background: linear-gradient(45deg, #9c27b0, #e1bee7); // 紫色光亮的漸層
                                -webkit-background-clip: text; // 用背景作為文字顏色
                                -webkit-text-fill-color: transparent; // 透明填充
                                -webkit-text-stroke: 0.6px rgba(black, 0.6);
                                text-shadow: 0 0 2px white, 0 0 15px white, 0 0 20px #9c27b0;

                                animation: glow 1.5s infinite alternate;

                                // 閃爍效果的動畫

                            }

                            @keyframes glow {
                                0% {
                                    text-shadow: 0 0 2px white, 0 0 15px white, 0 0 20px #9c27b0;
                                }

                                100% {
                                    text-shadow: 0 0 2px white, 0 0 15px white, 0 0 30px #9c27b0;
                                }
                            }

                            span {}
                        }
                    }
                }
            }
        }


        @keyframes gradientShift {
            0% {
                background-position: 50% 0%;
            }

            50% {
                background-position: 50% 100%;
            }

            100% {
                background-position: 50% 0%;
            }
        }

        @keyframes SMrollDown {
            0% {
                height: 0;
                opacity: 0.5;
            }

            100% {
                height: 600px;
                opacity: 1;
            }
        }

        @keyframes LGrollDown {
            0% {
                height: 0;
                opacity: 0.5;
            }

            100% {
                height: 500px;
                opacity: 1;
            }
        }
    }

    .herosayTitle {
        padding: 20px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: $gray-700;
        text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
    }

    .heroSayBox {
        margin-top: 30px;
        background-color: $gray-200;

        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        gap: 20px;

        .say-item {
            display: flex;
            align-items: center;
            background-color: #fff;
            background: linear-gradient(to bottom, rgba(177, 117, 5, 0.3), rgba(91, 58, 10, 0.685));
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;

            @media #{$sm} {
                flex-direction: column;
            }

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
            }

            .say-img {
                width: 80px;
                height: 80px;

                object-fit: cover;
                margin-right: 20px;
                // border-radius: 8px;
                // border: 2px solid #ccc;
                //光暈效果


            }

            .say-content {
                h4 {
                    font-size: 24px;
                    font-weight: bold;
                    color: $red-700;
                    margin-bottom: 10px;
                }

                p {

                    text-indent: 2em;
                    font-size: 20px;
                    color: #fff;
                    background-color: #fafafa;
                    padding: 10px;
                    border-left: 4px solid $red-700;
                    border-radius: 5px;
                    line-height: 1.6;
                    white-space: pre-wrap;
                    background-color: rgba($color: $gray-900, $alpha: 0.6);

                    @media #{$sm} {
                        border-left: 0px;
                        border-top: 4px solid $red-700;
                        ;
                    }
                }
            }
        }
    }

    .skillBox {
        margin-top: 30px;
        padding: 10px;
        border-radius: 20px;
        background-color: $gray-200;
        .hero-talents,
        .hero-awakening {
            margin-top: 30px;
            background-color: #fff;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            background: linear-gradient(to bottom, rgba(177, 117, 5, 0.3), rgba(91, 58, 10, 0.685));
            @media #{$sm} {
                flex-direction: column;
            }

            .imgAndDesc {
                display: flex;
                gap: 20px;
                .talent-img,
                .awakening-img {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 10px;
                    margin-bottom: 10px;
                    border: 2px solid #ccc;
                }

                p.talent-desc {

                    flex-grow: 1;
                    padding: 10px;
                    font-size: 20px;
                    color: white;
                    background-color: rgba($color: $gray-900, $alpha: 0.6);
                    border-radius: 10px;
                    line-height: 1.6;
                    white-space: pre-wrap;
                }
            }

            h3 {
                font-size: 24px;
                margin-bottom: 15px;
                color: $red-700;
                font-weight: bold;
            }


        }
    }


    .footer {
        margin-top: 30px;
        text-align: center;
        font-size: 18px;
        color: white;
    }
}
</style>