import React from 'react';

const Abstract = () => {
    return (
        <div className="abstract-box my-8 bg-purple-50 border-2 border-[var(--color-liturgical-purple-light)] rounded-lg p-6 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-[var(--color-liturgical-purple)] font-bold mb-3 uppercase tracking-wider text-sm">Tóm tắt nghiên cứu</h2>
            <p className="italic text-gray-700 leading-relaxed text-justify">
                Báo cáo này trình bày một phân tích toàn diện về thần học, lịch sử và thực hành Mùa Chay trong bối cảnh Giáo hội Công giáo năm 2026. Nghiên cứu khảo sát nguồn gốc từ nguyên và Kinh Thánh của 40 ngày chay tịnh, nhấn mạnh sự chuyển dịch từ khổ chế hình thức sang hoán cải nội tâm (metanoia). Bài viết cũng phân tích chi tiết các quy định Giáo luật hiện hành về ăn chay và kiêng thịt, đồng thời đối chiếu sự đa dạng trong thực hành giữa các truyền thống Kitô giáo (Công giáo, Chính thống giáo, Tin Lành). Bên cạnh đó, nghiên cứu làm nổi bật sự hội nhập văn hóa đặc sắc tại Việt Nam qua hinh thức "Ngắm 15 sự Thương Khó" và định hướng mục vụ của Tòa Thánh cho năm 2026, khẳng định giá trị của Mùa Chay như một hành trình sư phạm đức tin dẫn đến niềm hy vọng Phục Sinh.
            </p>
            <div className="mt-4 text-sm text-[var(--color-liturgical-purple-dark)]">
                <span className="font-bold">Từ khóa:</span> Mùa Chay, Hoán cải, Sám hối, Tuần Thánh, Tam Nhật Vượt Qua, Phụng vụ, Giáo luật, Hội nhập văn hóa.
            </div>
        </div>
    );
};

export default Abstract;
