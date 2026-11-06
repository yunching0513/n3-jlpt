# 第三方來源 Attribution

本檔列出專案使用或參考的第三方著作。它們的著作權屬於各自的權利人，不適用本專案的 `LICENSE` 與 `LICENSE-CONTENT`。

## japanese-tutor-mugi（MIT）

- 來源：<https://github.com/brian901106/japanese-tutor-mugi>
- 用途：AI 会話、小提醒本、速查的設計參考。包含回覆的 JSON 欄位設計、每次最多兩句與只糾正一個錯誤的教學規則、串流中 JSON 的修復方式、歷史訊息視窗的長度規則，以及判斷句子是否相同時先本機比對、再交給模型的流程。
- 本專案沒有使用它的後端架構、角色、圖像或語音素材。提示詞依本專案的情境重新撰寫，部分規則的寫法與原作相近。

```
MIT License

Copyright (c) 2026 brian901106

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## kuromoji.js（Apache-2.0）與 IPAdic 字典（NAIST 授權）

- 來源：<https://github.com/takuyaa/kuromoji.js>，版本 0.1.2，內含字典 `mecab-ipadic-2.7.0-20070801`。
- 用途：只在建置時由 `tools/build_furigana.mjs` 計算假名讀音。網頁內嵌的是計算結果，不包含 kuromoji 程式或字典本身。

## 字體

- Shippori Mincho、Zen Kaku Gothic New：經由 Google Fonts 載入，依 SIL Open Font License 使用。
