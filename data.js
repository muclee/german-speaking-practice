const data = [
    // 1. Essen und Trinken（飲食）
    { topic: "Essen und Trinken", word: "Frühstück", question: "Was essen Sie zum Frühstück?", answer: "Ich esse Brot und trinke Kaffee." },
    { topic: "Essen und Trinken", word: "Lieblingsessen", question: "Was ist Ihr Lieblingsessen?", answer: "Mein Lieblingsessen ist Fisch." },
    { topic: "Essen und Trinken", word: "Sonntag", question: "Gehen Sie am Sonntag ins Restaurant?", answer: "Ja, am Sonntag gehe ich mit meiner Familie ins Restaurant." },
    { topic: "Essen und Trinken", word: "Bier", question: "Trinken Sie gern Bier?", answer: "Ja, ich trinke gern Bier." },
    { topic: "Essen und Trinken", word: "Fisch", question: "Essen Sie gern Fisch?", answer: "Ja, ich esse gern Fisch." },
    { topic: "Essen und Trinken", word: "Brot", question: "Essen Sie oft Brot?", answer: "Ja, ich esse oft Brot." },
    // 2. Einkaufen（購物）
    { topic: "Einkaufen", word: "Zeitung", question: "Kaufen Sie eine Zeitung?", answer: "Nein, ich kaufe keine Zeitung." },
    { topic: "Einkaufen", word: "Kasse", question: "Wo ist die Kasse?", answer: "Gehen Sie geradeaus und dann links." },
    { topic: "Einkaufen", word: "Obst", question: "Wo kaufen Sie Obst?", answer: "Ich kaufe Obst im Supermarkt." },
    { topic: "Einkaufen", word: "Schuhe", question: "Wo kaufen Sie Schuhe?", answer: "Ich kaufe Schuhe online bei Amazon." },
    { topic: "Einkaufen", word: "Buch", question: "Kaufen Sie Bücher im Buchladen?", answer: "Nein, ich kaufe Bücher online." },
    { topic: "Einkaufen", word: "Stadtplan", question: "Wo kann ich einen Stadtplan kaufen?", answer: "Sie können einen Stadtplan im Kiosk kaufen." },
    // 3. Familie（家庭）
    { topic: "Familie", word: "Mutter", question: "Wo wohnt Ihre Mutter?", answer: "Meine Mutter wohnt in Taipei." },
    { topic: "Familie", word: "Kinder", question: "Haben Sie Kinder?", answer: "Nein, ich habe沒有 Kinder." },
    { topic: "Familie", word: "Restaurant", question: "Gehen Sie mit Ihrer Familie ins Restaurant?", answer: "Ja, wir gehen am Wochenende ins Restaurant." },
    { topic: "Familie", word: "Tochter", question: "Haben Sie eine Tochter?", answer: "Nein, ich habe keine Tochter." },
    { topic: "Familie", word: "Großvater", question: "Wie alt ist Ihr Großvater?", answer: "Mein Großvater ist achtundachtzig Jahre alt." },
    { topic: "Familie", word: "Essen", question: "Was essen Sie oft mit Ihrer Familie?", answer: "Wir essen oft Reis und Fleisch." },
    // 4. Freunde（朋友）
    { topic: "Freunde", word: "Reise", question: "Reisen Sie mit Freunden?", answer: "Ja, ich reise gern mit Freunden." },
    { topic: "Freunde", word: "Sprachkurs", question: "Haben Sie Freunde im Sprachkurs?", answer: "Ja, ich habe Freunde im Sprachkurs." },
    { topic: "Freunde", word: "Restaurant", question: "Treffen Sie Freunde im Restaurant?", answer: "Ja, ich treffe Freunde im Restaurant." },
    { topic: "Freunde", word: "Wochenende", question: "Treffen Sie Freunde am Wochenende?", answer: "Ja, am Wochenende treffe ich Freunde." },
    { topic: "Freunde", word: "Ausflug", question: "Machen Sie oft einen Ausflug mit Freunden?", answer: "Ja, wir machen oft Ausflüge." },
    { topic: "Freunde", word: "Geburtstag", question: "Laden Sie Ihre Freunde zu Ihrem Geburtstag ein?", answer: "Ja, ich lade meine Freunde zu meinem Geburtstag ein." },
    // 5. Beruf（職業）
    { topic: "Beruf", word: "Arbeitsplatz", question: "Wo ist Ihr Arbeitsplatz?", answer: "Mein Arbeitsplatz ist im Büro." },
    { topic: "Beruf", word: "Kollegen", question: "Haben Sie nette Kollegen?", answer: "Ja, meine Kollegen sind nett." },
    { topic: "Beruf", word: "Aufgaben", question: "Was sind Ihre Aufgaben?", answer: "Ich programmiere Software." },
    { topic: "Beruf", word: "Arbeitskleidung", question: "Tragen Sie Arbeitskleidung?", answer: "Nein, ich trage keine Arbeitskleidung." },
    { topic: "Beruf", word: "Spaß", question: "Macht Ihre Arbeit Spaß?", answer: "Ja, meine Arbeit macht Spaß." },
    { topic: "Beruf", word: "Arbeitszeit", question: "Wie lange arbeiten Sie jeden Tag?", answer: "Ich arbeite acht Stunden am Tag." },
    // 6. Freizeit（休閒時間）
    { topic: "Freizeit", word: "Freunde", question: "Treffen Sie Freunde in Ihrer Freizeit?", answer: "Ja, ich treffe Freunde in meiner Freizeit." },
    { topic: "Freizeit", word: "Wochenende", question: "Was machen Sie am Wochenende?", answer: "Am Wochenende gehe ich joggen." },
    { topic: "Freizeit", word: "Hobby", question: "Haben Sie ein Hobby?", answer: "Ja, mein Hobby ist Sport. Ich mache Krafttraining." },
    { topic: "Freizeit", word: "Fernseher", question: "Sehen Sie gern fern?", answer: "Ja, ich sehe gern fern." },
    { topic: "Freizeit", word: "Sport", question: "Machen Sie gern Sport?", answer: "Ja, ich mache gern Krafttraining im Fitnessstudio." },
    { topic: "Freizeit", word: "Feierabend", question: "What do you do after work?", answer: "Ich koche Abendessen mit meiner Frau." },
    // 7. Tagesablauf（日常生活作息）
    { topic: "Tagesablauf", word: "Aufstehen", question: "Wann stehen Sie heute auf?", answer: "Ich stehe heute um sieben Uhr auf." },
    { topic: "Tagesablauf", word: "Frühstück", question: "Was machen Sie nach dem Frühstück?", answer: "Nach dem Frühstück gehe ich zur Arbeit." },
    { topic: "Tagesablauf", word: "Arbeit", question: "Wann gehen Sie zur Arbeit?", answer: "Ich gehe um neun Uhr zur Arbeit." },
    { topic: "Tagesablauf", word: "Freunde", question: "Treffen Sie Freunde nach Feierabend?", answer: "Nein, ich gehe nach Hause." },
    { topic: "Tagesablauf", word: "Fernseher", question: "Sehen Sie oft fern?", answer: "Ja, ich sehe oft fern." },
    { topic: "Tagesablauf", word: "Kochen", question: "Kochen Sie jeden Tag?", answer: "Ja, ich koche fast jeden Tag." }
];