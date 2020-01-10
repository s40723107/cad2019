var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '每週練習內容', 'text': '', 'tags': '', 'url': '每週練習內容.html'}, {'title': 'week2', 'text': '', 'tags': '', 'url': 'week2.html'}, {'title': 'CMSIMDE', 'text': 'https://github.com/mdecourse/cmsimde \xa0是一套以 Python 加上 flask, bs4, lxml, mardown, pelican, flask_cors, leo 等模組所建構的網際內容管理系統. \n flask 模組是一套網際程式框架, CMSiMDE 利用此一框架編寫網際相關的函式, 用來執行動態的內容管理系統. \n bs4 在 CMSiMDE 擔任解析 config/content.htm 超文件檔案的工作, 根據 h1, h2 與 h3 標註, 對 content.htm 進行分頁, 因此使用者可以透過 3 個階次的內容架構進行編輯. \n lxml 模組主要用來將 content.htm 逐一轉換為 content 目錄中的個別檔案, 也就是在 CMSiMDE 動態系統中, 點擊 generate_pages 之後, 呼叫 lxml 模組中的分頁方法, 將動態內容轉為靜態內容. \n markdown 與 pelican 在 CMSiMDE 主要用來產生靜態網誌, 而網誌的設計與編輯則透過 Leo Editor 進行, 此外 CMSiMDE 除了網際內容管理與網誌之外, 還透過 Leo Editor 管理 reveal.js 網際簡報系統. \n flask_cors 模組, 在 CMSiMDE 是為了配合 Dartpad 程式編寫過程, 需要跨網站擷取資料的需求而加入, 在舊版的可攜系統中若無此模組, 執行 CMSiMDE 之前必須透過 \n python -m pip install flask_cors\xa0 \n 安裝. \n CMSiMDE 可以放入 Javascript 前端程式, 進行簡單的設計運算, 例如: \n http://mde.tw/cp2019/content/Task3.html \xa0中的猜數字遊戲. \n 也可以嵌入 STL文字格式零件, 例如: \n http://mde.tw/cad2019/content/STL.html \n 也可以利用前端的 Javascript 與伺服器後端的程式進行非同步設計運算或遠端控制, 例如: \n http://mde.tw/cad2019/content/Task1.html \xa0中的網際虛擬雙輪車控制. \n', 'tags': '', 'url': 'CMSIMDE.html'}, {'title': 'week3', 'text': '', 'tags': '', 'url': 'week3.html'}, {'title': '編譯步驟', 'text': '先將Y：\\ portablegit \\ bin \\ sh.exe改名為sh_rename_for_solvespace.exe \n git版本查驗git版本 \n git 2.13版本以上，可以使用以下git clone\xa0  --recurse-submodules獲取所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git解決空間 \n 編輯Y：\\ tmp \\ solvespace \\ extlib \\ angle \\ CMakeLists.txt註釋掉第713和714行 \n #list（APPEND ANGLE_DEFINITIONS  ＃“-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES = {\\” d3dcompiler_47.dll \\“，\\” d3dcompiler_46.dll \\“，\\” d3dcompiler_43.dll \\“}”） endif（） \n 需要手動進行libpng.dll.a的編譯，並改名為libpng_static.a，並放到編譯系統的lib目錄中： \n cd解空間 \n 光盤擴展庫 \n 光盤庫 \n mkdir構建 \n 光盤製作 \n cmake .. -G“ MinGW Makefiles” -DCMAKE_BUILD_TYPE =發布 mingw32-make \n 將libpng.dll.a重命名為libpng_static.a並複製到Y：\\ msys64 \\ mingw64 \\ lib \n 接著回到solvespace原始代碼目錄，建立構建目錄後進入建立目錄，執行： \n cmake .. -G“ MinGW Makefiles” -DCMAKE_BUILD_TYPE =發布 mingw32-make \n \n', 'tags': '', 'url': '編譯步驟.html'}, {'title': 'week5', 'text': '', 'tags': '', 'url': 'week5.html'}, {'title': 'Solvespace 操作', 'text': '\n', 'tags': '', 'url': 'Solvespace 操作.html'}, {'title': 'week6', 'text': '', 'tags': '', 'url': 'week6.html'}, {'title': 'V-rep模型控制汽車移動', 'text': '\n \xa0 \n', 'tags': '', 'url': 'V-rep模型控制汽車移動.html'}, {'title': 'week7', 'text': '', 'tags': '', 'url': 'week7.html'}, {'title': 'Solvespace 繪圖驗證', 'text': '從 零件網頁 自選要畫的圖 \xa0可採 Solvespace 完成繪圖的零件 \n \n', 'tags': '', 'url': 'Solvespace 繪圖驗證.html'}, {'title': 'week8', 'text': 'Leo 設定網址路徑和名稱 \n 1. \n 打開D槽中自己倉儲的config裡pelican.leo的檔案(在Leo\xa0裡開啟)，另外再打開Y槽tmp裡的cp2019/config/pelican.leo裡 \n 在Leo裡將cp2019的編輯tamplate/@path theme/...底下@edit base的程式全部複製並貼上在相同位置的自己的倉儲pelican.leo裡，之後做儲存 \xa0 \n 2. \n Leo中共用裡@edit\xa0 pelicanconf.py 修改 \n AUTHOR =自己學號 \n SITENAME =cad2019學號 \n 3. \n Leo中遠端裡@edit publishconf.py修改 \n 1. SITEURL =https://倉儲帳號.github.io/cad2019/blog \n 2. DISQUS_SITENAME =Disqus名稱 \n 註:指令ctrl+I=為一個節點，意思是增加一個檔案 \n', 'tags': '', 'url': 'week8.html'}, {'title': 'week10 . 11', 'text': 'Fork分組倉儲\xa0 :\xa0 https://github.com/s40723125/cad2019ag5 \n \n \n', 'tags': '', 'url': 'week10 . 11.html'}, {'title': 'week12', 'text': '', 'tags': '', 'url': 'week12.html'}, {'title': 'NX12', 'text': 'NX 12  for Engineering Design \n http://mde.tw/cad2019/downloads/NX-12-for-Engineering-Design.pdf \n NX12 繪圖操作影片 : \n \n \n 心得 :\xa0\xa0 第一次使用nx12繪圖還有些不習慣，經過電子書的說明跟閱讀後才懂得如何約束草圖上的線，比起solvespace的操作nx12的內容更加複雜也擁有比較多的應用可以使用，例如 模擬與加工程序與應力分析這些功能可以使用，比起solvespace 跟 inventor這些繪圖程式，nx12的功能雖然比較繁多相反的需要更多時間去摸索跟熟悉。 \n', 'tags': '', 'url': 'NX12.html'}, {'title': 'week13', 'text': '第13週-Solvespace 與 NX12 參數繪圖與 V-rep 結合應用 \n 重點筆記: 講解NX3與NX12之間特性、差異 \n NX3 使用輸出VRML[選VRML2.0，轉入Webots(副檔名.wrl)] 並勾選選項 1.output lights 2.output matenals 3.recursive multi file 註 : 1.imput VRML為Webots打開之檔案類型 2.solvespace無法轉成wrl檔 3.wrl檔為文字檔 NX12 重要檔案 1.NXASSEMBLY(作用為轉檔)=IGES也是轉檔 2.NXBIN 3.UGII 註: 1.Journal=畫圖中並同時儲存 比較差異 \n NX3 =較陽春，但簡便，可執行放在UGII檔裡 \n NX12 =規格、功能性相對齊全，但為了配合Windows 7之後的升級改版，直接將大部分檔案放在NXBIN裡，不過有些重要檔案仍儲存在UGII裡。 \n HOW TO\xa0將NX12程式語言改成Python \n 改寫位置之操作順序: File>Preferences>User interface>Tools \n 原先Journal language中將Visual Basic選項改為Python選項 \n 目的: 主要方面日後藉由程式去操作NX12 \n', 'tags': '', 'url': 'week13.html'}, {'title': 'week14', 'text': '任務 : \n 同步啟動跨組自評與互評機制 , 並針對課程內容所要求的任務要項逐一查驗各組員學習成效, 希望在鼓勵組員公開倉儲內容與教學影片互相學習之餘, 也能達到公平計分的目的，同時也強制性規定需作筆記。 \n 在第十四週也逐步介紹NX、Solvespace、Webots的執行與互動 \n Q.如何用SciTe執行Python，與 NX、Solvespace、Webots互動 \n A: 程式由外部控制虛擬、實體(大略贅述，詳情敘述只紀錄關鍵字) \n 片刻紀錄: \n 1 .關鍵字:nx run journal=用python執行，但沒跑出原始碼。 \n 2 .需放Download裡(只是demo)=可直接給路徑<path:path>名稱(yrl.學號)，使學號在路徑連結。 \n 3.cmsimde@...=為release轉出版本，會改變數字。 \n', 'tags': '', 'url': 'week14.html'}, {'title': 'week15', 'text': '個人學習成果回報 : \n \n', 'tags': '', 'url': 'week15.html'}, {'title': 'week16', 'text': '越野車零組件設計繪圖查驗 : \n \n 心得 :\xa0 \xa0 今天的小考題目並不簡單，時間上的分配要調配好，並且要自己去設計一些相關尺寸，希望下次能夠在時間內完成影片拍攝，這次的查驗明顯發現自己的繪畫速度太慢，需要更加努力。 \n', 'tags': '', 'url': 'week16.html'}, {'title': 'week17', 'text': '', 'tags': '', 'url': 'week17.html'}, {'title': '原文書翻譯', 'text': "Building the visible shapes \n 建立可見的形狀 \n Notice how the convex hull doesn't help us at this stage. \n 請注意，凸包在現階段如何對我們沒有幫助， \n We decide to use the mesh decimation function first, \n 我們決定首先使用網格抽取功能 \n \xa0 and run the function twice in order to divide the number of triangles by a total of 50.\xa0 \n 並運行兩次函數以將三角形的總數除以 50 \n Once that is done, we extract the inside of the simplified shape and discard it.\xa0 \n 完成後，我們提取簡化形狀的內部並將其丟棄 \n \xa0 We end-up with a mesh containing a total of 2'660 triangles (the original imported mesh contained more than 136'000 triangles!).\xa0 \n 我們最終得到一個包含總共 2'660 個三角形的網格（原始導入的網格包含了超過 136'000 個三角形！）。 \n \xa0 The number of triangles/vertices a shape contains can be seen in the shape geometry dialog. \n 形狀包含的三角形 / 頂點的數量可以在形狀幾何對話框中看到。 \n \xa02'660 triangles are extremely few triangles for a whole robot model, and the visual appearance might suffer a little bit from it. \n 對於整個機器人模型，2'660三角形是極少的三角形，因此視覺外觀可能會因此受到影響。 \n \xa0 At this stage we can start to divide the robot into separate links (remember, we currently have only a single shape for the whole robot). You can do this in two different ways: \n 在這一階段，我們可以開始將機器人劃分為單獨的鏈接（請記住，我們目前整個機器人只有一個形狀）。 您可以通過兩種不同的方式執行此操作： \n \xa0 Automatic mesh division: \xa0this function, which was already described in previous section \n 自動網格劃分：此功能已在上一節中進行了描述 \n will inspect the shape and generate a new shape for all elements that are not linked together via a common edge.\xa0 \n 將檢查形狀並為未通過公共邊鏈接在一起的所有元素生成新形狀。 \n \xa0 This does not always work, but is always worth a try. The function can be accessed with [Menu bar --> Edit --> Grouping/merging --> Divide selected shapes]. \n \xa0這並不總是有效，但總是值得嘗試的。 可以通過[菜單欄->編輯->分組/合併->分割所選形狀]使用該功能。 \n \xa0 Manual mesh division: \xa0via the the triangle edit mode, you can manually select the triangles than logically belong together, then click\xa0 Extract shape .\xa0 \n 手動網格劃分：通過三角形編輯模式，您可以手動選擇邏輯上不屬於三角形的三角形，然後單擊“提取形狀”。 他將會在場景中產生新的形狀。完成該操作後，刪除選定的三角形。 \n \xa0Now, we could further refine/simplify individual shapes ,Sometimes also, a shape might look better if its convex hull is used instead. \n 現在，我們可以進一步細化/簡化單個形狀，有時，如果改用凸殼，形狀可能會看起來更好。 \n \xa0 Othertimes, you will have to use several of above's described techniques iteratively, in order to obtain the desired result. Take for instance following mesh: \n 有時，您將不得不反複使用上述幾種技術，為了獲得理想的結果，以以下網格為例： \n \xa0 The problem with above's shape is that we cannot simplify it nicely, because of the holes it contains. \n 上面形狀的問題是，由於其中包含孔，我們無法很好地簡化它。 \n \xa0 So we have to go the more complicated way via the\xa0 shape edit mode , where we can extract individual elements that logically belong to the same convex sub-entity. \n \xa0因此，我們必須通過形狀編輯模式進行更複雜的處理，在該模式下，我們可以提取邏輯上屬於相同凸子實體的單個元素。 \n \xa0 This process can take several iterations: we first extract 3 approximate convex elements. \n 此過程可能需要進行多次疊帶代法：我們首先提取3個近似凸元素。 \n \xa0 For now, we ignore the triangles that are part of the two holes. While editing a shape in the shape edit mode, it can be convenient to switch the\xa0visibility layers, in order to see what is covered by other scene items. \n 現在，我們忽略了兩個孔中的三角形。 在形狀編輯模式下編輯形狀時，可以方便地切換可見性圖層，以查看其他場景項所覆蓋的內容。 \n \xa0 We end up with a toal of three shapes, but two of them will need further improvement. Now we can erase the triangles that are part of the holes. Finally, we extract the convex hull individually for the 3 shapes, then merge them back together with [Menu bar --> Edit --> Grouping/Merging --> merge selected shapes] \n 我們最終得到三個形狀的總和，但是其中兩個將需要進一步改進。 現在我們可以擦除作為兩個孔中的三角形。 最後，我們分別提取3種形狀的凸包，然後將其與[菜單欄->編輯->分組/合併->合併所選形狀]合併在一起 \n \xa0 In CoppeliaSim, we can enable/disable edge display for each shape. We can also specify an angle that will be taken into account for the edge display. \n 在CoppeliaSim中，我們可以啟用/禁用每種形狀的邊緣顯示。 我們還可以指定邊緣顯示時要考慮的角度。 \n \xa0 A similar parameter is the\xa0 shading angle , that dictates how facetted the shape will display. Those parameters, and a few others such as the shape\xa0 color , can be adjusted in the\xa0 shape properties . Remember that\xa0 shapes come in various flavours . In this tutorial we have only dealt with simple shapes up to now: a simple shape has a single set of visual attributes (i.e. one color, one shading angle, etc.). If you merge two shapes, then the result will be a simple shape. You can also group shapes, in which case, each shape will retain its visual attributes. \n 相似的參數是陰影角，它指示形狀將在多方面顯示。 這些參數以及其他一些參數（例如形狀顏色）可以在形狀屬性中進行調整。 請記住，形狀有多種型態。 到目前為止，在本教程中，我們僅處理簡單的形狀：簡單的形狀具有一組視覺屬性（即一種顏色，一個陰影角度等）。 如果合併兩個形狀，則結果將是一個簡單的形狀。 您還可以對形狀進行分組，在這種情況下，每個形狀將保留其視覺屬性。 \n \xa0 In next step, we can merge elements that logically belong together (if they are part of the same rigid element, and if they have the same visual attributes). Then we change the visual attributes of the various elements. The easiest ist to adjust a few shapes that have different colors and visual attributes, and if we name the color with a specific string, we can later easily programmatically change that color, also if the shape is part of a compound shape. Then, we select all the shapes that have the same visual attributes, then control-select the shape that was already adjusted, then click\xa0 Apply to selection , once for the\xa0 Colors , once for the\xa0 other properties , in the\xa0 shape properties : this transfers all visual attributes to the selected shapes (including the color name if you provided one). We end up with 17 individual shapes \n \xa0 下一步中，我們可以合併邏輯上屬於一起的元素（如果它們屬於同一剛性元素，並且具有相同的視覺屬性）。 然後，我們更改各種元素的視覺屬性。 調整具有不同顏色和視覺屬性的幾種形狀的最簡便方法，如果我們使用特定的字符串來命名顏色，則以後可以輕鬆地以編程方式更改該顏色，即使該形狀是複合形狀的一部分。 然後，我們選擇所有具有相同視覺屬性的形狀，控制選擇已調整的形狀，單擊“應用於選擇”，一次是“顏色”，一次是其他屬性，在形狀屬性中：這將轉移所有 所選形狀的視覺屬性（如果提供的話，還包括顏色名稱）。 我們最終得到17個單獨的形狀： \n \xa0 Now we can group the shapes that are part of the same link with [Menu bar --> Edit --> Grouping/merging -> Group selected shapes]. We end up with 7 shapes: the base of the robot (or base of the robot's hierarchy tree), and 6 mobile links. It is also important to correctly name your objects: you we do this with a double-click on the object name in the\xa0 scene hierarchy . The base should always be the robot or model name, and the other objects should always contain the base object name, like:\xa0 robot \xa0(base),\xa0 robot_link1 ,\xa0 robot_proximitySensor , etc. By defaut, shapes will be assigned to visibility layer 1, but can be changed in the\xa0 object common properties . By default, only\xa0 visibility layers 1-8 are activated for the scene . We now have following (the model\xa0 ResizableFloor_5_25 \xa0was temporarily made invisible in the\xa0 model properties dialog ) \n \xa0現在，我們可以使用[菜單欄->編輯->分組/合併->分組所選形狀]對屬於同一鏈接的形狀進行分組。 我們最終得到7個形狀：機器人的基礎（或機器人的層次結構樹的基礎）和6個移動鏈接。 正確命名對像也很重要：您可以通過雙擊場景層次結構中的對象名稱來做到這一點。 基礎應始終是機械手或模型名稱，其他對象應始終包含基礎對象名稱，例如：robot（基礎），robot_link1，robot_proximitySensor等。通過默認，形狀將分配給可見性層1，但可以 在對象通用屬性中進行更改。 默認情況下，僅激活場景的可見性層1-8。 現在，我們有了以下內容（模型ResizableFloor_5_25模型在模型屬性對話框中暫時不可見） \n When a shape is created or modified, CoppeliaSim will automatically set its reference frame position and orientation. A shape's reference frame will always be positioned at the shape's geometric center. The frame orientation will be selected so that the shape's bounding box remains as small as possible. This does not always look nice, but we can always reorient a shape's reference frame at any time. We now reorient the reference frames of all our created shapes with [Menu bar --> Edit --> Reorient bounding box --> with reference frame of world]. You have more options to reorient a reference frame in the\xa0 shape geometry dialog . \n 創建或修改形狀時，CoppeliaSim將自動設置其參考框架的位置和方向。 形狀的參考框架將始終位於形狀的幾何中心。 將選擇框架方向，以便形狀的邊界框保持盡可能小。 這並不總是看起來不錯，但是我們隨時可以隨時調整形狀的參考框架的方向。 現在，我們可以使用[菜單欄->編輯->重定向邊界框->使用世界參考框架]重新調整所有已創建形狀的參考框架。 您有更多選項可以在形狀幾何對話框中重新定向參考框架。 \n", 'tags': '', 'url': '原文書翻譯.html'}, {'title': 'week17影片', 'text': '\n', 'tags': '', 'url': 'week17影片.html'}, {'title': '期中報告', 'text': '期中報告影片 :\xa0 \n \n', 'tags': '', 'url': '期中報告.html'}, {'title': '期末報告', 'text': '期末報告影片展示: \n \n 這學期沒能把投影簡報完成，下學期會更加努力', 'tags': '', 'url': '期末報告.html'}]};