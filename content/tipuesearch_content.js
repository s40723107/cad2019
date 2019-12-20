var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '每週練習內容', 'text': '', 'tags': '', 'url': '每週練習內容.html'}, {'title': 'week2', 'text': '', 'tags': '', 'url': 'week2.html'}, {'title': 'CMSIMDE', 'text': 'https://github.com/mdecourse/cmsimde \xa0是一套以 Python 加上 flask, bs4, lxml, mardown, pelican, flask_cors, leo 等模組所建構的網際內容管理系統. \n flask 模組是一套網際程式框架, CMSiMDE 利用此一框架編寫網際相關的函式, 用來執行動態的內容管理系統. \n bs4 在 CMSiMDE 擔任解析 config/content.htm 超文件檔案的工作, 根據 h1, h2 與 h3 標註, 對 content.htm 進行分頁, 因此使用者可以透過 3 個階次的內容架構進行編輯. \n lxml 模組主要用來將 content.htm 逐一轉換為 content 目錄中的個別檔案, 也就是在 CMSiMDE 動態系統中, 點擊 generate_pages 之後, 呼叫 lxml 模組中的分頁方法, 將動態內容轉為靜態內容. \n markdown 與 pelican 在 CMSiMDE 主要用來產生靜態網誌, 而網誌的設計與編輯則透過 Leo Editor 進行, 此外 CMSiMDE 除了網際內容管理與網誌之外, 還透過 Leo Editor 管理 reveal.js 網際簡報系統. \n flask_cors 模組, 在 CMSiMDE 是為了配合 Dartpad 程式編寫過程, 需要跨網站擷取資料的需求而加入, 在舊版的可攜系統中若無此模組, 執行 CMSiMDE 之前必須透過 \n python -m pip install flask_cors\xa0 \n 安裝. \n CMSiMDE 可以放入 Javascript 前端程式, 進行簡單的設計運算, 例如: \n http://mde.tw/cp2019/content/Task3.html \xa0中的猜數字遊戲. \n 也可以嵌入 STL文字格式零件, 例如: \n http://mde.tw/cad2019/content/STL.html \n 也可以利用前端的 Javascript 與伺服器後端的程式進行非同步設計運算或遠端控制, 例如: \n http://mde.tw/cad2019/content/Task1.html \xa0中的網際虛擬雙輪車控制. \n', 'tags': '', 'url': 'CMSIMDE.html'}, {'title': 'week3', 'text': '', 'tags': '', 'url': 'week3.html'}, {'title': '編譯步驟', 'text': '先將Y：\\ portablegit \\ bin \\ sh.exe改名為sh_rename_for_solvespace.exe \n git版本查驗git版本 \n git 2.13版本以上，可以使用以下git clone\xa0  --recurse-submodules獲取所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git解決空間 \n 編輯Y：\\ tmp \\ solvespace \\ extlib \\ angle \\ CMakeLists.txt註釋掉第713和714行 \n #list（APPEND ANGLE_DEFINITIONS  ＃“-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES = {\\” d3dcompiler_47.dll \\“，\\” d3dcompiler_46.dll \\“，\\” d3dcompiler_43.dll \\“}”） endif（） \n 需要手動進行libpng.dll.a的編譯，並改名為libpng_static.a，並放到編譯系統的lib目錄中： \n cd解空間 \n 光盤擴展庫 \n 光盤庫 \n mkdir構建 \n 光盤製作 \n cmake .. -G“ MinGW Makefiles” -DCMAKE_BUILD_TYPE =發布 mingw32-make \n 將libpng.dll.a重命名為libpng_static.a並複製到Y：\\ msys64 \\ mingw64 \\ lib \n 接著回到solvespace原始代碼目錄，建立構建目錄後進入建立目錄，執行： \n cmake .. -G“ MinGW Makefiles” -DCMAKE_BUILD_TYPE =發布 mingw32-make \n \n', 'tags': '', 'url': '編譯步驟.html'}, {'title': 'week5', 'text': '', 'tags': '', 'url': 'week5.html'}, {'title': 'Solvespace 操作', 'text': '\n', 'tags': '', 'url': 'Solvespace 操作.html'}, {'title': 'week6', 'text': '', 'tags': '', 'url': 'week6.html'}, {'title': 'V-rep模型控制汽車移動', 'text': '\n \xa0 \n', 'tags': '', 'url': 'V-rep模型控制汽車移動.html'}, {'title': 'week7', 'text': '', 'tags': '', 'url': 'week7.html'}, {'title': 'Solvespace 繪圖驗證', 'text': '從 零件網頁 自選要畫的圖 \xa0可採 Solvespace 完成繪圖的零件 \n \n', 'tags': '', 'url': 'Solvespace 繪圖驗證.html'}, {'title': 'week8-1', 'text': 'Leo 設定網址路徑和名稱', 'tags': '', 'url': 'week8-1.html'}, {'title': 'week8-2', 'text': 'Leo 設定網址路徑和名稱 \n 1. \n 打開D槽中自己倉儲的config裡pelican.leo的檔案(在Leo\xa0裡開啟)，另外再打開Y槽tmp裡的cp2019/config/pelican.leo裡 \n 在Leo裡將cp2019的編輯tamplate/@path theme/...底下@edit base的程式全部複製並貼上在相同位置的自己的倉儲pelican.leo裡，之後做儲存 \xa0 \n 2. \n Leo中共用裡@edit\xa0 pelicanconf.py 修改 \n AUTHOR =自己學號 \n SITENAME =cad2019學號 \n 3. \n Leo中遠端裡@edit publishconf.py修改 \n 1. SITEURL =https://倉儲帳號.github.io/cad2019/blog \n 2. DISQUS_SITENAME =Disqus名稱 \n 註:指令ctrl+I=為一個節點，意思是增加一個檔案 \n', 'tags': '', 'url': 'week8-2.html'}, {'title': 'week10 . 11', 'text': 'Fork分組倉儲\xa0 :\xa0 https://github.com/s40723125/cad2019ag5 \n \n \n', 'tags': '', 'url': 'week10 . 11.html'}, {'title': 'week12', 'text': '', 'tags': '', 'url': 'week12.html'}, {'title': 'NX12', 'text': 'NX 12  for Engineering Design \n http://mde.tw/cad2019/downloads/NX-12-for-Engineering-Design.pdf \n', 'tags': '', 'url': 'NX12.html'}, {'title': 'week13', 'text': '第13週-Solvespace 與 NX12 參數繪圖與 V-rep 結合應用 \n 重點筆記: 講解NX3與NX12之間特性、差異 \n NX3 使用輸出VRML[選VRML2.0，轉入Webots(副檔名.wrl)] 並勾選選項 1.output lights 2.output matenals 3.recursive multi file 註 : 1.imput VRML為Webots打開之檔案類型 2.solvespace無法轉成wrl檔 3.wrl檔為文字檔 NX12 重要檔案 1.NXASSEMBLY(作用為轉檔)=IGES也是轉檔 2.NXBIN 3.UGII 註: 1.Journal=畫圖中並同時儲存 比較差異 \n NX3 =較陽春，但簡便，可執行放在UGII檔裡 \n NX12 =規格、功能性相對齊全，但為了配合Windows 7之後的升級改版，直接將大部分檔案放在NXBIN裡，不過有些重要檔案仍儲存在UGII裡。 \n HOW TO\xa0將NX12程式語言改成Python \n 改寫位置之操作順序: File>Preferences>User interface>Tools \n 原先Journal language中將Visual Basic選項改為Python選項 \n 目的: 主要方面日後藉由程式去操作NX12 \n', 'tags': '', 'url': 'week13.html'}, {'title': 'week14', 'text': '任務 : \n 同步啟動跨組自評與互評機制 , 並針對課程內容所要求的任務要項逐一查驗各組員學習成效, 希望在鼓勵組員公開倉儲內容與教學影片互相學習之餘, 也能達到公平計分的目的，同時也強制性規定需作筆記。 \n 在第十四週也逐步介紹NX、Solvespace、Webots的執行與互動 \n Q.如何用SciTe執行Python，與 NX、Solvespace、Webots互動 \n A: 程式由外部控制虛擬、實體(大略贅述，詳情敘述只紀錄關鍵字) \n 片刻紀錄: \n 1 .關鍵字:nx run journal=用python執行，但沒跑出原始碼。 \n 2 .需放Download裡(只是demo)=可直接給路徑<path:path>名稱(yrl.學號)，使學號在路徑連結。 \n 3.cmsimde@...=為release轉出版本，會改變數字。 \n', 'tags': '', 'url': 'week14.html'}, {'title': 'week15', 'text': '個人學習成果回報 : \n \n', 'tags': '', 'url': 'week15.html'}, {'title': '期中報告', 'text': '期中報告影片 :\xa0 \n', 'tags': '', 'url': '期中報告.html'}]};