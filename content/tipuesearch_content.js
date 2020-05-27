var tipuesearch = {"pages": [{'title': 'About', 'text': '分組倉儲: https://github.com/s40723138/cd2020ag4 \n 分組網站: https://s40723138.github.io/cd2020ag4/content/index.html \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'week', 'text': '', 'tags': '', 'url': 'week.html'}, {'title': 'week1', 'text': '\xa0  建立倉儲cd2020&進行網站編譯 \n \n 登入 github 並建立新倉儲 cd2020 \n 輸入  git clone\xa0 https://github.com/s40723101/cd2020.git \n 執行 git submodule add\xa0 https://github.com/mdecourse/cmsimde.git \xa0取得子模組資料 \n 把 up_dir 的所有項目複製到資料夾cd2020 \n 即可執行python wsgi.py編輯網站 \n \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': '\xa0 \xa0更新可攜系統中的 python至 python3.8.2  版本 \n \n 到 Python 的官方網站 \n 把 Windows x86-64 executable installer 安裝至可攜系統 \n 下載並將 pip 選項去掉 \n 將python安裝至 Y槽 \n 建立新的start.bat \n \n \xa0 \n \n 執行 get-pip.py \n 執行 pip install \xa0 將下列python3.8.2版本缺少的模組下載下來 \n pip install\xa0Flask \n pip install\xa0Markdown \n pip install\xa0lxml \n pip install\xa0bs4 \n pip install\xa0flask_cors \n pip install\xa0pelican \n pip install\xa0leo\xa0 \n \n 完成 \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3-4', 'text': '翻譯 DigitalProductCollaboration.pdf \n 第1頁 \n 通過設計協作創建更好的產品-心態，工具，過程 \n \xa0 \n 肖恩·莫尼漢（Shaun Moynihan） \n \xa0 \n 2019年7月10日 \n \xa0 \n 今天，數字產品比以往任何時候都更加複雜。創建它們需要多個團隊成員，每個成員都有自己的一套技能和專業知識。例如，在Savvy，我們的客戶與以下人員緊密合作：產品經理，UX設計人員，視覺設計師，開發人員，內容戰略家和成長專家。 \n \xa0 \n 我們使用設計協作來處理這種複雜性。正確完成，設計協作可助力 \n 每個專家都有共同的心態，流程和工具，共同建立更好的產品更快。 \n \xa0 \n 我們編寫了此資源，以幫助其他應用程序創建者採用協作文化和流程。讀 \n 繼續學習為什麼設計協作對於創造引人注目的產品很重要，以及經驗。我們還將深入探討設計協作心態和文化，工具的要素進行有效的設計協作，以及實際工作中的設計協作示例。 \n 什麼是“設計”協作？ \n 在進入之前，我們需要在同一頁面上了解什麼是設計協作……以及不是。簡單來說，設計協作就是在設計優先的環境中進行協作。但，由於設計的本質，特別是我們在Savvy所做的設計，設計協作趨向於超越人們通常認為的協作。 \n 通常將協作定義為兩個或兩個以上的人共同完成一項任務為了實現共同的目標，設計協作涉及更多。設計協作包括更多具有不同技能，艱鉅挑戰和更大規模的人員具有深遠影響的目標。您可能將協作視為兩個人掛在一塊藝術品上。它只需要溝通，團隊合作和四隻手。設計協作是指一組策展人精心設計訪問者的體驗。他們選擇藝術品，選擇在何處以及如何懸掛藝術品，它所居住的房間（以及房間的照明，家具），甚至前面的房間和建築物整個。 \n \xa0 \n 為什麼設計協作很重要 \n \xa0 \n 您可以在沒有協作的情況下設計產品，但是需要一個協作設計過程才能完成 \n 該產品很棒。這就是設計協作如此重要的原因。我們不僅為客戶構建應用程序。精明構建複雜的多平台體驗內部系統，在某些情況下還包括整個品牌和業務。為此，我們利用專業知識跨多個核心學科：戰略，設計，開發和增長。每個項目都涉及許多人都有各自的技能和專長。設計協作將這些思想融合在一起，將他們各自的專業知識結合在一起創建解決方案，以解決共同目標的所有方面。而不是一個人遇到問題角度來看，設計協作將這個問題擺在所有專家面前，迫使他們考慮新觀點和可能性。例如，我們在設計過程的早期就讓我們的開發人員參與進來，以確保我們盡快解決技術機會和局限性。 \n \xa0第2頁 \n 優勢並推動我們的技術能力，同時進一步消除了昂貴的障礙處理。它還限制了一個人可以在筒倉中工作的數量，從而使工作保持公開狀態並強調用戶需求和產品目標。培養設計協作心態在設計過程中建立有效的協作時，正確的思維方式大有幫助。它規定了誰進行協作，如何進行以及達到何種目的的準則。合作適合每個人設計師有時會認為不是設計師的人沒有資格提供良好的產品反饋。但是出色的設計不只是視覺效果。它涵蓋了有關產品的所有內容，從它的牌，工程技術及其成長。設計協作吸引了許多人，每個人都有自己的觀點和優勢。它給大家一個聲音。這些新鮮的觀點為設計師提供了更多信息。觀點使設計師能夠對對其他設計有持久影響的選擇做出正確的決定，開發和營銷選擇。與客戶的協作與與其他設計師和團隊的協作一樣重要成員。在Savvy，我們讓客戶參與其產品的整個創作過程。我們花些時間來解釋選項，並與客戶進行討論以確保我們了解他們的想法。這使我們能夠及早獲得客戶的認可，並從明確的起點和終點開始工作。更大的曝光量並不是什麼大驚喜，沒有人知道他們正在為 \n 第一次。客戶合作意味著無需花費高昂成本就能更快地獲得更清晰的產品 \n 後退和不必要的會議。很容易陷入角色而忽略全局。通過更早地參與更多的人 \n 而且，您正在與隊友建立更緊密的聯繫，並共同承擔責任，對產品成功的興趣。您正在創建一個更加開放和透明的流程，因為以及更緊密聯繫和投入的團隊。合作是背景性的客戶向我們提出了複雜的挑戰和目標。更不用說，我們繼續努力與我們的客戶進行長達數月甚至數年的交流，並積累了過去的大量知識決策，研究和其他有價值的環境。通過採用上下文優先的方法，您可以確保每個人都處於最高水平知識。這樣，他們就可以在產品上做出最明智的決定。為了做到這一點，我們通過引入所有團隊成員儘早，記錄和記錄會議，建立一些重疊的地方以及過程中的下一個團隊成員就像客戶一樣。在個案協作的基礎上，上下文也同樣重要。請遵循以下準則以保持協作中的上下文優先：在顯示您的工作之前提供上下文。如果您正在工作，則您的工作是否出現在屏幕上 \n 提供背景信息，您已經失去了聽眾的注意力。描述您要解決的問題或要達到的目標。 \n 第3頁 \n 介紹與當前問題相關的工作。解釋您的想法以及為什麼要這麼做某些決定。 \n 請具體說明您要反饋的內容。合作是開放，誠實和無畏的將您的工作（和您自己）放在那裡並不容易。情緒會阻礙提供開放和誠實的反饋，尤其是當您擔心會傷害他人的感受時。這並不意味著在協作中沒有情感的位置。感覺如何在設計中很重要。我們為有情感，在決策中使用情感的人。離開談話可能會縮短潛在的想法或解決方案。充其量，僅圍繞事實和數據進行務實的討論是不會的。提供完整圖片。在最壞的情況下，它可能是鯡魚或提供虛假的敘述。在Savvy，我們使我們的團隊對收到反饋“無所畏懼”。這意味著放手關於我們為自己創造的東西而被評判的任何焦慮。這也意味著了解我們在一起變得更強大，更有機會創造偉大的事物。無所畏懼，我們更好地信任並相互授權，以提供誠實和周到的反饋。我們的團隊還相信，不要害怕提供反饋。這意味著了解需要解決的問題以及客戶的品牌和目標。這也意味著要問很多提問以發現相關思想或幫助指導決策。嘗試以探索性和指導性的方式提出反饋意見，以建立並改善工作而不是拆散。推特您的反饋意見應具有建設性。與其說你不喜歡麼，不如說反饋以指出您要幫助解決的問題。在以下方面提供可行的步驟改善工作，或者至少改善您的思維背後的理由。而且不要忘記表達您喜歡什麼以及為什麼。合作不僅僅是新的想法開放並接受協作反饋是一回事，解析這些想法是另一回事並將它們用作激發自己的催化劑。這是一項發展起來的高級技能時間。一種實踐方法是成為更好的聽眾。通常，在與他人交談時，我們會更多地考慮接下來要說的內容比別人在說什麼\xa0這會影響反饋過程，尤其是在設計中，因為我們 \n 在聽到其他意見或解決方案之前，通常都知道我們要說什麼。當您選擇先聆聽然後再做出反應時，它可以讓您完全理解反饋有人在介紹您，並讓您更深入-他們使用的觀點是什麼他們來自哪裡？很有可能這是您在創建過程。通過聽取並理解反饋的上下文和推理您正在接受，正在向更多的視角，思維方式和體驗方式開放您的設計。然後，您可以針對挑戰，目標和用例測試這些新觀點。您正在設計用於查看它們是否更適合用戶。當所有協作者都在積極聆聽時，更容易接受反饋。最終，提供良好反饋的技能來自學習如何獲得反饋。當我們做一個 \n 努力成為更好的聽眾，我們也發現自己變得更加謙虛，我們認為， \n 第4頁 \n 更好的設計師。查找和使用正確的設計協作工具正確的工具在增強團隊的設計協作思維方面大有幫助。在這部分，您將了解在協作工具中尋找什麼。我們還建議根據我們的工具自己的經驗。選擇合適的工具有效的協作工具為協作者消除了所有障礙，使他們能夠快速輕鬆地訪問和與工作互動。這將重點放在提供反饋上。他們還允許其他人在不破壞原始設計的情況下進行協作。過去，我們使用依賴於提供基本版本控制的工具，而不是真正的協作功能。例如，設計人員將保存一個Sketch文件並將其上傳到Dropbox。然後，另一個團隊成員將下載它，進行處理，然後重新上傳。沒有簡單的方法在文件移交給他人的情況下進行更改。我們嘗試了與Github類似的方法，實踐證明，該工具非常適合管理代碼庫，但在迭代設計工作中卻不那麼重要。不用說，這些版本控制流程使我們的協作更加耗時，令人困惑，而且非常不合作。現在，我們根據協作類型從多種更高級的工具中進行選擇想要實現。戰鬥機這是一個協作優先的共享工作區工具。Figma非常適合在其中有多個人設計文件的相同區域。您可以觀看友設計或在同一設計上一起工作實時。好處：Figma降低了某人在筒倉中工作的能力。無需添加不必要的修飾或創建靜態可交付結果即可實現協作。所以您無需更改工作流程即可展示設計。可以輕鬆地在其本機環境中查看並與之交互，並隨意進行調整。何時使用：流量文檔，高保真線框，即時協作和行走客戶通過一系列屏幕來解釋並獲得有關設計方向的反饋。奇蹟雖然Figma傾向於感覺更自由和靈活，但Marvel允許更標準化的形式合作。這也使我們的客戶可以輕鬆地與我們合作。好處：漫威是一個更清潔，更規範和集中的空間，非常適合與非設計合作團隊成員。它消除了客戶支付帳戶或深入了解工具的所有需求 \n 去看工作。 \n 第5頁 \n 客戶可以下載屏幕並通過Marvel在設備環境中查看它們的運行情況 \n 應用程式。 \n 使用時間：與客戶和開發人員一起呈現更多最終設計工作。（學習關於 \n Marvel與其他原型工具的比較。） \n 其他合作工具 \n Zeplin是一個有用的傳遞工具，可讓開發人員深入了解設計的細節。 \n 工作。（我們在這裡更深入地討論Zeplin。） \n Quip是集思廣益和產品/過程文檔的絕佳平台。我們用它來記錄 \n 並組織團隊成員在工作時需要了解的所有背景和知識 \n 一個專案。對於集思廣益而不是視覺關注的新想法也很有用。 \n 請注意，還有許多其他工具可以為協作增加類似的好處， \n 上面列出的。該列表代表了在我們日常工作中對我們有效的工具 \n 協作，並不表示所有選項都可能對您的團隊有效。 \n 精明的設計合作過程在實踐中 \n 現在，讓我們採用上面概述的最佳實踐和工具，並展示它們如何組合在一起。 \n 現實生活中的情況。我們將使用Press Play應用程序中的實時繪圖體驗來演示 \n 設計協作的重要性。這項經驗涉及到 \n 跨學科的團隊成員數量，包括視覺設計師，UX設計人員，開發人員， \n 產品經理，當然還有客戶。 \n 語境與挑戰 \n Press Play是一個抽獎活動應用程序，可保存每日，每周和每月的圖紙。用戶獲得門票 \n 觀看廣告，然後選擇五個表情符號輸入繪圖。然後根據 \n 他們的選擇如何與圖形的隨機選擇表情符號匹配。這個特殊的任務有 \n 我們為正在等待現場繪畫結果的用戶創造了一個有趣而激動人心的現場體驗。 \n 對於我們來說，為這種體驗創建類似遊戲的動畫非常重要。我們特別想要 \n 在用戶去看他們的屏幕時在屏幕上喚起一種嬉戲和期待感 \n 所選表情符號與抽獎活動附圖中的表情符號匹配。 \n 就是說，我們需要注意動畫所需的複雜程度及其影響 \n 在整個產品的時間表和成本上。我們的目標是將保真度提高到 \n 合理的時間，而不會顯著影響項目的預算。 \n 合作過程 \n 階段1：線框和頭腦風暴 \n 首先，精明的用戶體驗設計師創建了Press Play的整體用戶體驗和線框，確定了 \n 需要屏幕和每個屏幕的時間安排。她還提出了一個粗略的概念（如圖 \n 右圖）用於實時繪圖動畫，根據客戶的需求和 \n 項目的已建立UX。 \n 她向產品經理和視覺設計師展示了線框和粗糙的動畫 \n 設計師。然後，這三個人都與客戶會面，因此每個人都可以直接聽到反饋。 \n 第二階段：研究與背景 \n I：\\ DesignCollaborationBetterProducts.txt-文件日期：2/29/2020-文件時間：4:02:48 PM \n 第6頁 \n 精明的視覺設計師負責創建實際的實時繪圖動畫 \n 新鮮的眼睛，並且對Press Play產品沒有太多的先驗知識。為了起床，他 \n 與UX設計人員和產品經理進行了深入的交談。他還致力於其他研究 \n 有時間了解整體產品目標，挑戰並熟悉工作 \n 至今。如前所述，他是線框演示的一部分，並為 \n 客戶的反饋。 \n 在這種情況下，他進行了一些與手頭任務直接相關的其他研究。 \n 通過這樣做，他確保自己了解現場繪畫體驗的要求，目標和 \n 挑戰。他查看了具有類似經驗和保真度的其他應用，並參考了 \n 動畫，以了解最終動畫到底需要顯示什麼（在這種情況下， \n 表情符號和用戶的表情符號選擇）。在過於束縛解決方案之前，他遇到了一個精明的人 \n iOS開發人員了解技術限制和注意事項。 \n 然後，我們的視覺設計師和UX設計師集思廣益，對視覺效果至關重要。他們 \n 同意需要為用戶建立緩慢的提示以建立懸念/期望 \n 階段3：迭代和反饋 \n 當我們的視覺設計師沿多個不同方向工作時，他選擇了UX設計師 \n 聊聊他在Figma中的進度和設計。通過討論工作，他們激發了更多 \n 想法和迭代，同時確保它們符合客戶期望。還有更多 \n 他手下有很多可靠的選擇，他再次與iOS開發人員會面，以確保一切都在 \n 從技術角度出發。 \n 階段4：客戶的反饋和發展 \n 當我們找到更多，更最終的體驗版本時，視覺設計師走了 \n 通過他們與客戶一起使用Figma。Press Play產品經理和UX設計師 \n 還提供了反饋和指導。 \n 一旦他們都了解了引起顧客興趣的東西，視覺設計師便開始最大限度地發揮作用。 \n 視覺效果並使它們為開發做好準備。他繼續與iOS開發人員合作， \n 在技術層面上充分利用該概念。 \n 最終結果 \n Press Play的實時繪圖動畫是工作中設計協作的一個示例。一隊 \n 跨學科專家一起解決更大的設計和開發挑戰 \n 含義。沒有設計協作，我們將找不到理想的交集 \n 用戶體驗，視覺和技術。 \n 當客戶在他的應用程序中看到動畫生動時，他稱其為“開創性的”。 \n 此外，這種Press Play體驗的研究，合作和創造對我們有幫助 \n 發現產品用戶旅程中的空白。最初，現場繪畫的目的是為了娛樂 \n 向用戶顯示結果的方式。在設計過程中，我們意識到，如果 \n 用戶不觀看實時繪圖，他們就會迷失方向，無法體驗終結 \n 該圖紙的用戶旅程。 \n 基於這一發現，我們決定在其他兩個地方也改進該應用程序。我們添加了一個 \n 獲勝者圈子的結果/實時繪圖元素，以及用戶的輸贏歷史記錄部分 \n 應用程序的細節部分。最後，設計協作使我們得以實現這一未實現的目標 \n 需要用戶體驗。 \n 結論說明 \n I：\\ DesignCollaborationBetterProducts.txt-文件日期：2/29/2020-文件時間：4:02:48 PM \n 第7頁 \n 設計協作需要解決建築中伴隨的複雜，關鍵問題 \n 很棒的產品和經驗。通過利用多個團隊成員的專業知識 \n 跨學科的設計協作可確保團隊從各個角度應對挑戰 \n 並尋求更好的解決方案。借助正確的思維方式，工具和流程，進行設計協作 \n 使團隊能夠通過創造性思維和迭代來更深入。 \n 我們希望本指南為您提供良好的基礎，以便您可以構建自己的有效設計 \n 協作過程。您可以在Savvy博客上了解有關設計和產品策略的更多信息， \n 並隨時在Savvy Apps網站上與我們聯繫以尋求幫助。 \n I：\\ DesignCollaborationBetterProducts.txt-文件日期：2/29/2020-文件時間：4:02:48 PM \n', 'tags': '', 'url': 'week3-4.html'}, {'title': 'week6', 'text': '安裝 OBSPortable.exe 和youtube配合，在上課使用 \n OBSPortable.exe官網 : https://portableapps.com/apps/music_video/obs-studio-portable \n \n \n', 'tags': '', 'url': 'week6.html'}, {'title': 'week7', 'text': '第一次進行線上教學上課 \n 每組抽點4位同學直播 \n 本組抽點同學 \n 40723102 \n 40723135 \n 40723136 \n 40723138 \n', 'tags': '', 'url': 'week7.html'}, {'title': 'week8', 'text': '第二周線上教學上課 \n 本周抽點直播 \n group 4:40723102 group 4:40723101 group 4:40723119 group 4:40723138 \n 直播影片 \n \n', 'tags': '', 'url': 'week8.html'}, {'title': 'week9(期中)', 'text': '', 'tags': '', 'url': 'week9(期中).html'}, {'title': 'week10', 'text': '', 'tags': '', 'url': 'week10.html'}, {'title': 'week11', 'text': '', 'tags': '', 'url': 'week11.html'}, {'title': 'week12', 'text': '', 'tags': '', 'url': 'week12.html'}, {'title': 'week13', 'text': '利用Onshape畫出車牌 \n \n', 'tags': '', 'url': 'week13.html'}, {'title': 'week14', 'text': '', 'tags': '', 'url': 'week14.html'}, {'title': 'week15', 'text': '', 'tags': '', 'url': 'week15.html'}, {'title': 'week16', 'text': '', 'tags': '', 'url': 'week16.html'}, {'title': 'week17', 'text': '', 'tags': '', 'url': 'week17.html'}, {'title': '分組作業', 'text': 'group 4 Repository: \xa0 40423155 \xa0 | Site: \xa0 40423155 Repository: \xa0 40723101 \xa0 | Site: \xa0 40723101 Repository: \xa0 40723102 \xa0 | Site: \xa0 40723102 Repository: \xa0 40723106 \xa0 | Site: \xa0 40723106 Repository: \xa0 40723111 \xa0 | Site: \xa0 40723111 Repository: \xa0 40723119 \xa0 | Site: \xa0 40723119 Repository: \xa0 40723121 \xa0 | Site: \xa0 40723121 Repository: \xa0 40723124 \xa0 | Site: \xa0 40723124 Repository: \xa0 40723134 \xa0 | Site: \xa0 40723134 Repository: \xa0 40723135 \xa0 | Site: \xa0 40723135 Repository: \xa0 40723136 \xa0 | Site: \xa0 40723136 Repository: \xa0 40723138 \xa0 | Site: \xa0 40723138 \xa0 (group leader) \n', 'tags': '', 'url': '分組作業.html'}, {'title': '作業1', 'text': '40723101 沈易萱 \n 40723111 李其叡 \n 40723121 邱博義 \n 40723138 黃奕慶 \n', 'tags': '', 'url': '作業1.html'}, {'title': '作業2', 'text': '40723101 沈易萱 \n 40723106 王昱翔 \n 40723121 邱博義 \n 40723135 陳藝晉 \n 40423155 蘇麒彬 \n', 'tags': '', 'url': '作業2.html'}, {'title': '小組直播', 'text': '', 'tags': '', 'url': '小組直播.html'}]};