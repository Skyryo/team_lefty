export default function History({ district, mappingList }) {

    const mall_id = district.id;
    const shop_ids = mappingList.find((item) => item.map_id === mall_id).shop_ids;
    const articles = shop_ids.flatMap((shop_id) => {
        return JSON.parse(localStorage.getItem(`shop_${shop_id}`)).data.data;
    }).sort((a, b) => new Date(b.updated_at.origin) - new Date(a.updated_at.origin));

    console.log(articles)

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
            <h1 className="text-3xl font-bold mb-6 text-white">{district.name}の年輪</h1>
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="relative border-l-4 border-blue-500 pl-8">
                    {articles.map((article, index) => (
                        <div key={index} className="mb-6 flex items-start relative">
                            <div className="absolute -left-4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                            <div className="ml-6">
                                <span className="text-sm text-gray-500 block">{article.updated_at.time_ago}</span>
                                <a
                                    href={`https://prtimes.jp${article.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-lg font-medium"
                                >
                                    {article.title}
                                </a>
                                <span className="text-gray-700 block mt-1">企業: {article.company.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
