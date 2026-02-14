import { TableData } from '@/lib/reportData';

interface TableComponentProps {
    data: TableData;
}

export default function TableComponent({ data }: TableComponentProps) {
    return (
        <div className="my-8 rounded-lg overflow-hidden border border-[var(--color-liturgical-purple-light)] shadow-sm">
            {data.caption && (
                <div className="bg-[var(--color-liturgical-purple-light)]/10 py-3 px-4 border-b border-[var(--color-liturgical-purple-light)]">
                    <p className="text-sm font-bold text-center uppercase tracking-wide print:text-black" style={{ color: 'var(--color-liturgical-purple-dark)' }}>
                        {data.caption}
                    </p>
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left border !border-purple-200">
                    <thead className="!bg-purple-100 !text-purple-900">
                        <tr>
                            {data.headers.map((header, idx) => (
                                <th
                                    key={idx}
                                    className="px-4 py-3 text-sm font-bold uppercase tracking-wider border-b-2 !border-purple-300 first:pl-6 last:pr-6"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y !divide-purple-100">
                        {data.rows.map((row, rowIdx) => (
                            <tr
                                key={rowIdx}
                                className={rowIdx % 2 === 0 ? 'bg-white hover:bg-purple-50' : 'bg-purple-50/50 hover:bg-purple-50'}
                            >
                                {row.map((cell, cellIdx) => (
                                    <td
                                        key={cellIdx}
                                        className="px-4 py-3 text-sm text-gray-800 leading-relaxed border-r border-purple-100 last:border-r-0 first:pl-6 last:pr-6 align-top whitespace-pre-line"
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Table Footnote example - could be added to data structure later */}
        </div>
    );
}
