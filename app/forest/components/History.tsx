"use client";

const initialData = {
    id: 1,
    name: "高円寺純情商店街",
    articles: [
        {
            id: 1,
            company: "コクテイル書房",
            title: "「高円寺 本の街商店会」が12月1日よりいよいよ本格稼働を開始",
            url: "https://prtimes.jp/main/html/rd/p/000000006.000116200.html",
            date: "2024年11月27日",
        },
        {
            id: 2,
            company: "株式会社小杉湯",
            title: "「株式会社ゆあそび」設立に関するお知らせ",
            url: "https://prtimes.jp/main/html/rd/p/000000024.000035029.html",
            date: "2024年10月1日",
        },
        {
            id: 3,
            company: "SOCIO",
            title: "高円寺にてサッカー古着屋「Socio」が4/29よりオープン！",
            url: "https://prtimes.jp/main/html/rd/p/000000001.000141498.html",
            date: "2024年5月10日",
        },
        {
            id: 4,
            company: "株式会社小杉湯",
            title:
                "小杉湯原宿がハラカド内で「銭湯を中心とした街」のようなフロアをプロデュース。花王・アンダーアーマー・サッポロビール・MYTREXがパートナーに。",
            url: "https://prtimes.jp/main/html/rd/p/000000023.000035029.html",
            date: "2024年4月9日",
        },
        {
            id: 5,
            company: "株式会社小杉湯",
            title: "株式会社小杉湯の2店舗目となる銭湯『小杉湯原宿』2024年4月17日に開業が決定！",
            url: "https://prtimes.jp/main/html/rd/p/000000021.000035029.html",
            date: "2024年3月6日",
        },
    ],
};

export default function History() {
    return (
        <div
            className="min-h-screen flex flex-col items-center p-8 bg-center bg-cover"
            style={{
                backgroundImage: `
                    radial-gradient(circle, 
                    #f8f3e8 10%, #e7d3b8 20%, #d6b896 30%, 
                    #c69b74 40%, #b37d4f 50%, #a56c3c 60%, 
                    #94622f 70%, #845625 80%, #734b1b 90%)
                `,
            }}
        >
            <h1 className="text-3xl font-bold mb-6 text-white">{initialData.name}の年輪</h1>
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="relative border-l-4 border-blue-500 pl-8">
                    {initialData.articles.map((article) => (
                        <div key={article.id} className="mb-6 flex items-start relative">
                            {/* 丸（ノード） */}
                            <div className="absolute -left-4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                            {/* 日付と内容 */}
                            <div className="ml-6">
                                <span className="text-sm text-gray-500 block">{article.date}</span>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-lg font-medium"
                                >
                                    {article.title}
                                </a>
                                <span className="text-gray-700 block mt-1">企業: {article.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
