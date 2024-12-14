import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const limit = '100'
    const companyId = searchParams.get('shop_id');
    const apiUrl = `https://prtimes.jp/api/company_content.php/companies/${companyId}/press_releases?limit=${limit}` ;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch data from external API' },
                { status: response.status }
            );
        }

        const data = await response.json();

        // クライアントにデータを返す
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
