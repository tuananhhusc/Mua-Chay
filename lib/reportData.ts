// TypeScript interfaces for the Catholic Lent research report
import { section4 } from './sections/section4';
import { section5 } from './sections/section5';
import { section6 } from './sections/section6';
import { section7 } from './sections/section7';
import { section8 } from './sections/section8';
import { section9 } from './sections/section9';

export interface TableData {
    caption?: string;
    headers: string[];
    rows: string[][];
}

export interface APAReference {
    id: number;
    author: string;         // Organization/Website name
    year: string;           // Publication year
    title: string;          // Article/Page title  
    accessDate: string;     // Retrieved date
    url: string;
}

export interface Section {
    id: string;
    title: string;
    level: 1 | 2 | 3 | 4;
    content: string[];
    subsections?: Section[];
    table?: TableData;
}

export interface TOCItem {
    id: string;
    title: string;
    level: number;
}

// ===================================================================
// MAIN REPORT DATA - All 9 Sections
// ===================================================================

export const reportData: Section[] = [
    // ======================== SECTION I ========================
    {
        id: "dan-luan",
        title: "I. Dẫn luận: Khởi nguyên, Bản chất và Tiến trình Lịch sử của Mùa Chay",
        level: 1,
        content: [
            "Trong tiến trình cấu trúc của Năm Phụng vụ Công giáo, Mùa Chay (Quadragesima) đóng vai trò là một thời kỳ chuẩn bị mang tính trọng tâm, hướng cộng đoàn tín hữu đến đỉnh cao tuyệt đối của đức tin Kitô giáo: Biến cố Vượt Qua của Đức Kitô.[1] Không chỉ đơn thuần là một chuỗi ngày thực hành các quy định luật pháp mang tính hình thức hay một khoảng thời gian trầm lắng về mặt phụng vụ, Mùa Chay thực chất là một hành trình thanh luyện nội tâm sâu sắc, kéo dài 40 ngày, khởi đi từ Thứ Tư Lễ Tro và khép lại ngay trước Thánh lễ Tiệc Ly vào chiều Thứ Năm Tuần Thánh.[3]",

            "Khung thời gian 40 ngày này không phải là một con số ngẫu nhiên mà mang đậm tính biểu tượng Kinh Thánh và thần học lịch sử cứu độ. Nó gọi về ký ức của 40 ngày đêm đại hồng thủy thanh tẩy trái đất, 40 năm dân Israel lang thang trong sa mạc Sinai để được tôi luyện trước khi bước vào Đất Hứa, 40 ngày ngôn sứ Êlia đi bộ đến núi Horeb, và đặc biệt nhất là 40 ngày Chúa Giêsu ăn chay, cầu nguyện và chịu cám dỗ trong hoang địa trước khi bước vào sứ vụ công khai.[2] Việc tham dự vào Mùa Chay, do đó, là việc người Kitô hữu bước vào cùng một hoang địa thiêng liêng với Đức Kitô, đối diện với những cám dỗ căn bản của kiếp người để tái khẳng định sự phụ thuộc tuyệt đối vào Thiên Chúa.",

            "Xét về mặt từ nguyên học và ngữ nghĩa, thuật ngữ \"Mùa Chay\" trong tiếng Việt nhấn mạnh trực tiếp đến hành vi luân lý và kỷ luật thể xác là \"chay tịnh\" (fasting) và kiêng khem.[3] Trong khi đó, ở các ngôn ngữ Tây phương, chẳng hạn như \"Lent\" trong tiếng Anh (bắt nguồn từ từ lencten trong tiếng Anh cổ), nguồn gốc của từ này ban đầu hoàn toàn không mang ý nghĩa tôn giáo mà chỉ đơn thuần chỉ mùa Xuân, thời điểm ngày bắt đầu dài hơn đêm, vạn vật bừng tỉnh, đâm chồi nảy lộc và đổi mới sau một mùa đông giá rét.[2] Sự giao thoa giữa ý nghĩa đổi mới của mùa Xuân và sự thanh luyện của việc chay tịnh đã định hình nên một nền thần học Mùa Chay vô cùng phong phú: đây là lúc Giáo hội kêu gọi con cái mình bước vào một cuộc \"đổi mới tâm linh\" toàn diện. Hành trình này được xây dựng trên bốn nền tảng thực hành cốt lõi, không thể tách rời nhau: sám hối, ăn chay hãm mình, cầu nguyện và làm các việc bác ái.[4]"
        ]
    },

    // ======================== SECTION II ========================
    {
        id: "than-hoc-hoan-cai",
        title: "II. Thần học về Sự Hoán Cải và Sám Hối Nội Tâm (Metanoia và Paenitentia)",
        level: 1,
        content: [
            "Động năng cốt lõi của Mùa Chay không nằm ở các hình thức bên ngoài mà bám rễ sâu vào chiều kích nội tâm, được định nghĩa và triển khai qua hai khái niệm thần học nền tảng: \"Sám hối\" (Paenitentia) và \"Hoán cải\" (Metanoia)."
        ],
        subsections: [
            {
                id: "sam-hoi",
                title: "1. Phân tích Từ nguyên và Cấu trúc của Sám hối",
                level: 2,
                content: [
                    "Sám hối, theo định nghĩa nghiêm ngặt trong thần học tu đức, bao hàm hai trạng thái tâm lý, tri thức và ý chí liên kết chặt chẽ với nhau: \"Sám\" là sự ăn năn, nhận thức và đau buồn về những lỗi lầm đã phạm trong quá khứ; và \"Hối\" là quyết tâm chừa bỏ, dốc lòng sửa trị và không tái phạm trong tương lai.[5] Nếu một tiến trình tâm linh chỉ dừng lại ở sự dằn vặt, mặc cảm tội lỗi về quá khứ (\"sám\") mà thiếu đi hành động thay đổi thực tiễn và định hướng tương lai (\"hối\"), thì gốc rễ của tội lỗi và sự xa cách Thiên Chúa vẫn chưa được khắc phục triệt để.[5] Sự sám hối này luôn được bắt đầu bằng việc thừa nhận thân phận thụ tạo mỏng giòn, được biểu diễn qua nghi thức rắc tro lên đầu trong ngày Thứ Tư Lễ Tro, nhắc nhở tín hữu rằng họ là tro bụi và chắc chắn sẽ trở về cùng bụi tro.[4]",

                    "Tâm tình sám hối sâu xa này được biểu hiện rõ nét nơi kinh nghiệm thiêng liêng của các bậc thánh nhân qua các thời đại. Điển hình như Thánh Inhaxiô Loyola, đấng sáng lập Dòng Tên, người đã đề nghị các thao viên trong Tuần I của sách Linh Thao phải nhìn thẳng vào sự hư hoại và nhơ bẩn của tội lỗi với một thái độ khiêm hạ tột độ.[5] Tương tự, sự nhạy cảm với tội lỗi nơi các vị thánh như Luy Gonzaga hay Têrêxa Giêsu cho thấy một quy luật của đời sống tâm linh: khi con người càng tiến gần đến ánh sáng thánh thiện vô biên của Thiên Chúa, họ càng nhận ra rõ ràng chiều sâu đen tối của những yếu đuối và tì vết nơi bản thân mình, cho dù đó là những lỗi lầm nhỏ bé nhất.[5] Do đó, Mùa Chay thách đố tín hữu lột bỏ những mặt nạ tự mãn để đối diện với sự thật trần trụi về thân phận tội lỗi của mình trước mặt Đấng Tạo Hóa.[6]"
                ]
            },
            {
                id: "hoan-cai",
                title: "2. Động năng Hoán cải (Metanoia): Sự xoay chuyển Toàn diện",
                level: 2,
                content: [
                    "Vượt lên trên sự đau buồn về tội lỗi, Mùa Chay mời gọi một sự \"hoán cải\" sâu xa. Trong truyền thống Kinh Thánh, lời kêu gọi hoán cải bắt nguồn từ các ngôn sứ thời Cựu Ước. Ngôn sứ Joel (sống khoảng năm 375 TCN), trong bối cảnh lịch sử của một thảm họa châu chấu tàn phá mùa màng, được diễn dịch như cuộc tấn công của thù địch và sự phán xét của Thiên Chúa, đã vang lên lời hiệu triệu dân chúng phải lập tức sám hối và hoán cải để đẩy lui tai ương.[6]",

                    "Thuật ngữ tiếng Do Thái được sử dụng ở đây là shub, tương đương với từ metanoein (Metanoia) trong tiếng Hy Lạp, mang một ý nghĩa vô cùng triệt để.[6] Khái niệm này ban đầu xuất phát từ một mệnh lệnh quân sự: yêu cầu đội quân đang hành quân phải xoay người 180 độ để chuyển hướng hoàn toàn ngược lại.[6] Do vậy, hoán cải trong Kinh Thánh không bao giờ là việc chỉ thực hiện một vài điều khoản tôn giáo hay gia tăng các hình thức sùng đạo (như đọc thêm kinh, nhịn thêm một bữa ăn), mà là một bước ngoặt, một sự đổi hướng toàn bộ quỹ đạo của đời người.[5]",

                    "Sự hoán cải (Conversion/Metanoia), xét về mặt thần học siêu nhiên, không chỉ là nỗ lực luân lý nhằm diệt trừ thói hư tật xấu theo kiểu tu thân của triết học thế tục. Quan trọng hơn, đó là sự tái định hướng toàn bộ cuộc sống, thay đổi não trạng, ý hướng và tâm tình để quay trở về cùng Thiên Chúa.[5] Hành động này đòi hỏi một sự đoạn tuyệt dứt khoát với quá khứ lầm lạc—giống như thái độ của viên thu thuế Giakêu khi đón nhận ơn cứu độ vào nhà mình—để thiết lập lại sự hiệp thông và dự phần vào sự sống linh thiêng của Đức Kitô.[5]",

                    "Tiến trình hoán cải này bao hàm hai mặt không thể tách rời: tiêu cực và tích cực. Mặt tiêu cực (hướng về quá khứ) là sự từ bỏ đường xưa lối cũ, đau buồn vì tội lỗi (paenitentia) và mong muốn đền bù những tổn thương đã gây ra; mặt tích cực (hướng về tương lai) là niềm tin vững vàng vào Nước Thiên Chúa, lao mình vào vòng tay thương xót vô biên của Chúa Cha.[5] Lời loan báo đầu tiên của Đức Giêsu trong Phúc Âm Máccô: \"Hãy sám hối và tin vào Tin Mừng\" (Mc 1,15) đã liên kết chặt chẽ hai yếu tố này thành nền tảng duy nhất của ơn hoán cải.[5] Hơn nữa, sự hoán cải đích thực đòi hỏi con người phải mang lấy tâm tình của trẻ nhỏ (Mt 18,1-3)—đơn sơ, khiêm nhường, hiền hòa và hoàn toàn phó thác, rũ bỏ mọi tham vọng kiêu ngạo. Tuy nhiên, Giáo hội cũng cảnh giác rằng, trở nên như trẻ nhỏ không đồng nghĩa với sự \"ấu trĩ thiêng liêng\" (infantilisme spirituel), mà tín hữu vẫn cần sự trưởng thành vững vàng trong phán đoán và nhân cách luân lý.[5]"
                ]
            }
        ]
    },

    // ======================== SECTION III ========================
    {
        id: "ky-luat-phung-vu",
        title: "III. Kỷ luật Phụng vụ và Giáo luật về Chay tịnh",
        level: 1,
        content: [
            "Trong suốt chiều dài lịch sử Giáo hội, chay tịnh luôn được coi là một phương tiện khổ chế đắc lực để rèn luyện tinh thần, kiềm chế đam mê nhục dục và biểu lộ lòng sám hối.[3] Trước Công đồng Vaticanô II, các luật lệ về Mùa Chay vô cùng khắt khe. Chẳng hạn, các dòng tu nhặt nhiệm như Dòng Cát Minh từng giữ chay hàng ngày trong suốt Mùa Chay (trừ Chúa Nhật) và kiêng thịt ba ngày mỗi tuần.[6] Việc ăn chay lúc bấy giờ chiếm vị trí thống trị đến mức nhiều người coi đây là gánh nặng luân lý. Tuy nhiên, thần học về việc giữ chay hiện đại đã có những bước chuyển biến quan trọng, chuyển từ việc chú trọng tuyệt đối vào các hình thức nhiệm nhặt bên ngoài sang việc ưu tiên cho sự hoán cải nội tâm.[6]"
        ],
        subsections: [
            {
                id: "khung-phap-ly",
                title: "1. Khung Pháp lý của Giáo luật hiện hành",
                level: 2,
                content: [
                    "Bộ Giáo luật hiện hành của Giáo hội Công giáo Rôma (từ Điều 1249 đến 1253) đã hệ thống hóa các quy định về việc ăn chay và kiêng thịt một cách linh hoạt, nhằm phù hợp với thể trạng con người trong thời đại mới, đồng thời vẫn bảo đảm tính chất sám hối cốt lõi của Mùa Chay.[3]"
                ],
                table: {
                    caption: "Bảng 1: Quy định Ăn chay và Kiêng thịt theo Giáo Luật Công giáo",
                    headers: [
                        "Cấp độ Tuổi theo Giáo Luật",
                        "Quy định Ăn chay (Fasting)",
                        "Quy định Kiêng thịt (Abstinence)",
                        "Diễn giải Thần học và Mục vụ"
                    ],
                    rows: [
                        [
                            "Từ sơ sinh đến 14 tuổi",
                            "Miễn trừ",
                            "Miễn trừ",
                            "Trẻ em đang trong độ tuổi phát triển thể chất được miễn trừ kỷ luật nghiêm ngặt. Tuy nhiên, cha mẹ và mục tử có trách nhiệm giáo dục ý nghĩa sám hối thực sự cho trẻ."
                        ],
                        [
                            "Từ 14 tuổi đến 17 tuổi",
                            "Miễn trừ",
                            "Bắt buộc",
                            "Đây là độ tuổi bắt đầu ý thức luân lý cơ bản, tín hữu được mời gọi tập hy sinh qua việc kiêng thịt, nhưng chưa bị buộc phải giảm khẩu phần ăn."
                        ],
                        [
                            "Từ 18 tuổi đến 59 tuổi",
                            "Bắt buộc",
                            "Bắt buộc",
                            "Giai đoạn trưởng thành hoàn toàn. Người tín hữu phải chịu trách nhiệm đầy đủ trước các kỷ luật Mùa Chay như một cách thực hành công lý đối với bản thân."
                        ],
                        [
                            "Từ 60 tuổi trở lên",
                            "Miễn trừ",
                            "Bắt buộc",
                            "Giáo hội thể hiện sự nhân từ, xem xét đến sự suy giảm thể lực của người cao tuổi nên miễn luật ăn chay, nhưng vẫn duy trì luật kiêng thịt."
                        ]
                    ]
                }
            },
            {
                id: "chi-tiet-thuc-hanh",
                title: "Chi tiết Thực hành Ăn chay và Kiêng thịt",
                level: 3,
                content: [
                    "Việc giữ chay (theo Điều 1252) quy định một kỷ luật chặt chẽ về lượng thức ăn: tín hữu chỉ được dùng một bữa ăn no trong ngày. Bữa còn lại được gọi là bữa đói, có thể chia làm hai bữa nhỏ, với điều kiện tiên quyết là tổng lượng thức ăn của hai bữa nhỏ này gộp lại không được vượt quá hoặc bằng lượng thức ăn của một bữa no.[3] Tín hữu tuyệt đối không được ăn vặt giữa các bữa chính. Tuy nhiên, Giáo hội cho phép việc uống các loại thức uống giải khát bất cứ lúc nào (ngoại trừ rượu bia) để duy trì sức khỏe.[3] Trong ngày ăn chay, người tín hữu vẫn được phép sử dụng các thực phẩm bổ sung dinh dưỡng như trứng, cá và các sản phẩm chế biến từ sữa.[3]",

                    "Đối với việc kiêng thịt, Giáo luật quy định rất rõ việc phải kiêng các loại thịt thuộc động vật máu nóng (như heo, bò, gà, vịt).[3] Trái lại, việc tiêu thụ các loài động vật máu lạnh như cá, tôm, hải sản hoàn toàn được phép.[3] Sự phân định này không bắt nguồn từ một lý thuyết dinh dưỡng hiện đại, mà xuất phát từ truyền thống văn hóa cổ xưa, khi thịt động vật máu nóng được xem là món ăn của sự xa hoa, tiệc tùng và giàu có, trong khi cá là thức ăn của người nghèo và mang tính giản dị, khiêm tốn."
                ]
            },
            {
                id: "thoi-diem-ap-dung",
                title: "Thời điểm áp dụng Kỷ luật",
                level: 3,
                content: [
                    "Thứ Tư Lễ Tro và Thứ Sáu Tuần Thánh: Đây là hai đỉnh cao mang tính bắt buộc. Mọi tín hữu trong độ tuổi quy định phải thực hiện cả hai hình thức: ăn chay và kiêng thịt.[3]",

                    "Các ngày Thứ Sáu trong Mùa Chay và trong suốt cả năm: Bắt buộc kiêng thịt. Việc này nhằm tưởng nhớ liên lỉ sự thương khó và cái chết của Chúa Giêsu diễn ra trong ngày Thứ Sáu.[3]"
                ]
            },
            {
                id: "chuan-mien",
                title: "2. Các Trường hợp Chuẩn miễn và Định hướng Thay thế",
                level: 2,
                content: [
                    "Giáo hội Công giáo không bao giờ áp dụng luật lệ một cách cứng nhắc, giáo điều mà luôn đề cao lòng nhân từ và sự thấu cảm đối với các hoàn cảnh nhân sinh đa dạng. Các đối tượng đương nhiên được miễn giữ chay bao gồm: phụ nữ đang mang thai hoặc đang trong thời kỳ nuôi con bằng sữa mẹ, người đang mắc bệnh tật hoặc có thể trạng yếu kém, những người phải lao động chân tay nặng nhọc để mưu sinh, và những người nghèo khổ đang sống trong cảnh bần hàn, thiếu thốn lương thực thường nhật.[3] Hơn nữa, các Giám mục Bản quyền có thẩm quyền chuẩn miễn việc ăn chay và kiêng thịt cho tín hữu trong giáo phận mình vì những lý do chính đáng và hợp lý.[3]",

                    "Trong trường hợp không thể thực hiện chay tịnh vì lý do khách quan, Hội đồng Giám mục địa phương có quyền thiết lập các hình thức thay thế. Việc ăn chay, kiêng thịt có thể được thay thế bằng việc thực hiện các công việc bác ái (chăm sóc người nghèo, thăm viếng bệnh nhân, trẻ mồ côi) hoặc các việc đạo đức sâu sắc hơn (đọc kinh chung gia đình, tham dự Thánh lễ ngày thường, viếng Thánh Thể).[3] Dù chọn hình thức nào, mục đích cuối cùng vẫn là mời gọi người Công giáo sống tinh thần sám hối đích thực.[3]"
                ]
            },
            {
                id: "y-nghia-sau-xa",
                title: "3. Ý nghĩa Thần học sâu xa của Chay tịnh",
                level: 2,
                content: [
                    "Về mặt thần học, việc ăn chay sẽ lập tức bị tước bỏ mọi giá trị ơn cứu độ nếu nó chỉ là một vỏ bọc đạo đức giả để phô trương. Trang web của Opus Dei đã lưu ý một điểm quan trọng dựa trên Tân Ước (Mt 6,18): Chúa Giêsu đã làm sáng tỏ động cơ sâu xa của việc ăn chay khi Người lên án gay gắt thái độ của những người Pharisêu.[7] Những nhân vật này tuân giữ luật lệ một cách vô cùng tỉ mỉ, làm bộ rầu rĩ để người ta thấy mình đang ăn chay, nhưng tâm hồn họ lại đầy rẫy sự kiêu ngạo và xa cách Thiên Chúa.[7]",

                    "Ăn chay đích thực, như Thầy Chí Thánh đã nhiều lần nhấn mạnh, không phải là một thành tựu cá nhân để khoe khoang, mà chính là phương tiện để thực thi ý muốn của Cha trên trời, Đấng thấu suốt những gì kín đáo và sẽ ban thưởng cho những tâm hồn khiêm nhu.[7] Do đó, việc thay đổi theo hướng giảm nhẹ kỷ luật bên ngoài hiện nay không phải là sự buông lỏng đạo đức hay thỏa hiệp với thế gian, mà là một bước lùi chiến thuật về mặt mục vụ để nhấn mạnh rằng: Mùa Chay thực sự phải hướng về những biến đổi \"bên trong\".[6] Việc \"xé lòng chứ đừng xé áo\" (ngôn sứ Joel) mới là mục tiêu tối hậu của hoán cải Kinh Thánh. Sự đói khát về mặt thể lý phải trở thành một dấu chỉ nhắc nhở con người về sự đói khát Lời Chúa và Bánh Hằng Sống."
                ]
            }
        ]
    },
    section4,
    section5,
    section6,
    section7,
    section8,
    section9
];

// ===================================================================
// APA FORMATTED REFERENCES
// ===================================================================

export const apaReferences: APAReference[] = [
    {
        id: 1,
        author: "Muoiman.net",
        year: "2026",
        title: "Phụng Vụ Tuần Thánh: Nguồn Gốc, Ý Nghĩa Và Việc Cử Hành",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://muoiman.net/index.php/vi/news/CAM-NANG-TUAN-THANH/Phung-Vu-Tuan-Thanh-Nguon-Goc-Y-Nghia-Va-Viec-Cu-Hanh-3258/"
    },
    {
        id: 2,
        author: "Wikipedia tiếng Việt",
        year: "2026",
        title: "Mùa Chay",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://vi.wikipedia.org/wiki/M%C3%B9a_Chay"
    },
    {
        id: 3,
        author: "Huynh Đoàn Đaminh Việt Nam",
        year: "2026",
        title: "Sáu Chỉ Dẫn của Giáo Luật về Ăn Chay – Kiêng Thịt",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://hddmvn.net/6-chi-dan-cua-giao-luat-ve-an-chay-kieng-thit/"
    },
    {
        id: 4,
        author: "Filumena",
        year: "2026",
        title: "Mùa Chay 2026 Bắt Đầu và Kết Thúc Khi Nào?",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://www.filumena.net/vi/mua-chay/"
    },
    {
        id: 5,
        author: "Giáo Phận Đà Lạt",
        year: "2026",
        title: "Mùa Chay - Mùa Sám Hối, Mời Gọi Hoán Cải",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://giaophandalat.com/mua-chay-mua-sam-hoi-moi-goi-hoan-cai.html"
    },
    {
        id: 6,
        author: "Lòng Chúa Thương Xót",
        year: "2026",
        title: "Mùa Chay – Mùa Của Sám Hối",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://longchuathuongxot.vn/v2/mua-chay-mua-cua-sam-hoi/"
    },
    {
        id: 7,
        author: "Hội Đồng Giám Mục Việt Nam",
        year: "2026",
        title: "7 Câu Trả Lời Cho Các Thắc Mắc Về Việc Ăn Chay Và Kiêng Thịt",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://hdgmvietnam.com/chi-tiet/7-cau-tra-loi-cho-cac-thac-mac-ve-viec-an-chay-va-kieng-thit"
    },
    {
        id: 8,
        author: "Hội Đồng Giám Mục Việt Nam",
        year: "2026",
        title: "Hiệp Hành Trên 14 Chặng Đàng Thánh Giá",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://hdgmvietnam.com/chi-tiet/hiep-hanh-tren-14-chang-dang-thanh-gia-44690"
    },
    {
        id: 9,
        author: "Tổng Giáo Phận Hà Nội",
        year: "2026",
        title: "Caritas TGP Hà Nội: Xuân Thánh Ân – Tết Ấm Áp Bên Người Nghèo",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://www.tonggiaophanhanoi.org/caritas-tgp-ha-noi-xuan-thanh-an-tet-am-ap-ben-nguoi-ngheo/"
    },
    {
        id: 10,
        author: "Tổng Giáo Phận Hà Nội",
        year: "2026",
        title: "Thông Báo",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://www.tonggiaophanhanoi.org/category/thong-bao/"
    },
    {
        id: 11,
        author: "Tổng Giáo Phận Hà Nội",
        year: "2026",
        title: "Ý Nghĩa và Cách Thức Cử Hành Tuần Thánh và Tam Nhật Vượt Qua",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://www.tonggiaophanhanoi.org/y-nghia-va-cach-thuc-cu-hanh-tuan-thanh-va-tam-nhat-vuot-qua/"
    },
    {
        id: 12,
        author: "Hội Đồng Giám Mục Việt Nam",
        year: "2026",
        title: "Phụng Vụ Lễ Lá, Lịch Sử Và Ý Nghĩa",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://hdgmvietnam.com/chi-tiet/phung-vu-le-la-lich-su-va-y-nghia-39592"
    },
    {
        id: 13,
        author: "Giáo Phận Thanh Hóa",
        year: "2026",
        title: "Nguồn Gốc Và Ý Nghĩa Của Tam Nhật Vượt Qua",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://giaophanthanhhoa.net/phung-vu/nguon-goc-va-y-nghia-cua-tam-nhat-vuot-qua-41872.html"
    },
    {
        id: 14,
        author: "Nhà Thờ Thái Hà",
        year: "2026",
        title: "Ý Nghĩa Phụng Vụ Thứ Sáu Tuần Thánh",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://nhathothaiha.net/y-nghia-phung-vu-thu-sau-tuan-thanh/"
    },
    {
        id: 15,
        author: "Hội Đồng Giám Mục Việt Nam",
        year: "2026",
        title: "Tuần Thánh: Tam Nhật Vượt Qua Là Gì?",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://hdgmvietnam.com/chi-tiet/tuan-thanh-tam-nhat-vuot-qua-la-gi--50591"
    },
    {
        id: 16,
        author: "Báo Công Giáo và Dân Tộc",
        year: "2026",
        title: "Ngắm Nguyện, Một Truyền Thống Cần Gìn Giữ",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://www.cgvdt.vn/ngam-nguyen-mot-truyen-thong-can-gin-giu_a18277"
    },
    {
        id: 17,
        author: "Giáo Phận Ban Mê Thuột",
        year: "2026",
        title: "5 Sự Khác Biệt Giữa Mùa Chay Chính Thống Giáo và Công Giáo Rôma",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://gpbanmethuot.com/giao-ly/5-su-khac-biet-giua-mua-chay-chinh-thong-giao-va-cong-giao-roma-8797.html"
    },
    {
        id: 18,
        author: "Wikipedia",
        year: "2026",
        title: "Lent",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://en.wikipedia.org/wiki/Lent"
    },
    {
        id: 19,
        author: "Spartan Newsroom",
        year: "2024",
        title: "Understanding Lent in Three Different Denominations",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://news.jrn.msu.edu/2024/02/understanding-lent-in-three-different-denominations/"
    },
    {
        id: 20,
        author: "Reddit - r/Lutheranism",
        year: "2026",
        title: "Is It True That Lutherans and Anglicans Have More Reverent Liturgies Than Roman Catholics in the West?",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://www.reddit.com/r/Lutheranism/comments/18cj2zt/is_it_true_that_lutherans_and_anglicans_have_more/"
    },
    {
        id: 21,
        author: "Giáo Phận Phú Cường",
        year: "2026",
        title: "Chủ Đề và Chương Trình Tuần Tĩnh Tâm Mùa Chay Năm 2026 của ĐTC Lêô và Giáo Triều Roma",
        accessDate: "Truy cập ngày 13 tháng 2 năm 2026",
        url: "https://giaophanphucuong.org/bai-viet/tin-giao-hoi-hoan-vu/chu-de-va-chuong-trinh-tuan-tinh-tam-mua-chay-nam-2026-cua-dtc-leo-va-giao-trieu-roma"
    }
];

// Helper function to extract TOC items
export function getTOCItems(): TOCItem[] {
    const items: TOCItem[] = [];

    const extractItems = (sections: Section[]) => {
        for (const section of sections) {
            items.push({
                id: section.id,
                title: section.title,
                level: section.level
            });

            if (section.subsections) {
                extractItems(section.subsections);
            }
        }
    };

    extractItems(reportData);
    return items;
}
