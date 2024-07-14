const translation = {
  apiServer: 'API Server',
  apiKey: 'API Key',
  status: 'Trạng thái',
  disabled: 'Tắt',
  ok: 'Đang hoạt động',
  copy: 'Sao chép',
  copied: 'Đã chép',
  play: 'Chạy',
  pause: 'Dừng',
  playing: 'Đang chạy',
  merMaind: {
    rerender: 'Redo Rerender',
  },
  never: 'Không bao giờ',
  apiKeyModal: {
    apiSecretKey: 'API khoá bí mật',
    apiSecretKeyTips: 'Để ngăn chặn việc lạm dụng API, hãy bảo vệ Khóa API của bạn. Tránh sử dụng nó dưới dạng văn bản thuần túy trong mã giao diện người dùng. :)',
    createNewSecretKey: 'Tạo khóa bí mật mới',
    secretKey: 'Khóa bí mật',
    created: 'CREATED',
    lastUsed: 'LAST USED',
    generateTips: 'Giữ chìa khóa này ở nơi an toàn và dễ tiếp cận.',
  },
  actionMsg: {
    deleteConfirmTitle: 'Xóa khóa bí mật này?',
    deleteConfirmTips: 'Hành động này không thể được hoàn tác.',
    ok: 'OK',
  },
  completionMode: {
    title: 'Completion App API',
    info: 'Đối với việc tạo văn bản chất lượng cao, như bài viết, tóm tắt và dịch thuật, hãy sử dụng API hoàn thành tin nhắn với đầu vào người dùng. Việc tạo văn bản dựa trên các thông số mô hình và mẫu đề xuất được thiết lập trong Mlchain Prompt Engineering.',
    createCompletionApi: 'Tạo tin nhắn hoàn thành',
    createCompletionApiTip: 'Tạo một tin nhắn hoàn thành để hỗ trợ chế độ câu hỏi và trả lời.',
    inputsTips: '(Tùy chọn) Cung cấp các trường đầu vào người dùng dưới dạng cặp khóa-giá trị, tương ứng với các biến trong Prompt Eng. Khóa là tên biến, Giá trị là giá trị tham số. Nếu loại trường là Lựa chọn, Giá trị đã gửi phải là một trong các lựa chọn đã thiết lập trước.',
    queryTips: 'Nội dung văn bản đầu vào của người dùng.',
    blocking: 'Loại chặn, đợi để thực hiện hoàn tất và trả kết quả. (Yêu cầu có thể bị gián đoạn nếu quá trình kéo dài)',
    streaming: 'trả về dữ liệu theo luồng. Thực hiện trả dữ liệu theo luồng dựa trên SSE (Sự kiện được gửi từ máy chủ).',
    messageFeedbackApi: 'Phản hồi tin nhắn (thích)',
    messageFeedbackApiTip: 'Đánh giá các tin nhắn nhận được thay mặt cho người dùng cuối với các lựa chọn thích hoặc không thích. Dữ liệu này hiển thị trên trang Nhật ký & Chú thích và được sử dụng cho việc điều chỉnh mô hình trong tương lai.',
    messageIDTip: 'ID tin nhắn',
    ratingTip: 'thích hoặc không thích, null là hủy bỏ',
    parametersApi: 'Thu thập thông tin tham số ứng dụng',
    parametersApiTip: 'Truy xuất các tham số Đầu vào được cấu hình, bao gồm tên biến, tên trường, loại và giá trị mặc định. Thường được sử dụng để hiển thị các trường này trong một biểu mẫu hoặc điền vào các giá trị mặc định sau khi máy khách tải.',
  },
  chatMode: {
    title: 'Chat App API',
    info: 'Đối với ứng dụng trò chuyện linh hoạt sử dụng định dạng Câu hỏi và Trả lời, gọi API tin nhắn trò chuyện để bắt đầu cuộc trò chuyện. Duy trì cuộc trò chuyện liên tục bằng cách chuyển conversation_id đã trả về. Các tham số phản hồi và mẫu phụ thuộc vào các cài đặt của Mlchain Prompt Eng.',
    createChatApi: 'Tạo tin nhắn trò chuyện',
    createChatApiTip: 'Tạo một tin nhắn trò chuyện mới hoặc tiếp tục một cuộc trò chuyện đang tồn tại.',
    inputsTips: '(Tùy chọn) Cung cấp các trường đầu vào người dùng dưới dạng cặp khóa-giá trị, tương ứng với các biến trong Prompt Eng. Khóa là tên biến, Giá trị là giá trị tham số. Nếu loại trường là Lựa chọn, Giá trị đã gửi phải là một trong các lựa chọn đã thiết lập trước.',
    queryTips: 'Nội dung câu hỏi của người dùng',
    blocking: 'Loại chặn, đợi để thực hiện hoàn tất và trả kết quả. (Yêu cầu có thể bị gián đoạn nếu quá trình kéo dài)',
    streaming: 'trả về dữ liệu theo luồng. Thực hiện trả dữ liệu theo luồng dựa trên SSE (Sự kiện được gửi từ máy chủ).',
    conversationIdTip: '(Tùy chọn) ID cuộc trò chuyện: để trống cho cuộc trò chuyện lần đầu; chuyển conversation_id từ ngữ cảnh để tiếp tục cuộc trò chuyện.',
    messageFeedbackApi: 'Phản hồi của người dùng cuối về tin nhắn, như',
    messageFeedbackApiTip: 'Đánh giá các tin nhắn nhận được thay mặt cho người dùng cuối với các lựa chọn thích hoặc không thích. Dữ liệu này hiển thị trên trang Nhật ký & Chú thích và được sử dụng cho việc điều chỉnh mô hình trong tương lai.',
    messageIDTip: 'ID tin nhắn',
    ratingTip: 'thích hoặc không thích, null là hủy bỏ',
    chatMsgHistoryApi: 'Lấy lịch sử tin nhắn trò chuyện',
    chatMsgHistoryApiTip: 'Trang đầu tiên trả về `limit` tin nhắn mới nhất, được sắp xếp theo thứ tự ngược lại.',
    chatMsgHistoryConversationIdTip: 'ID Cuộc trò chuyện',
    chatMsgHistoryFirstId: 'ID của bản ghi trò chuyện đầu tiên trên trang hiện tại. Giá trị mặc định là không có.',
    chatMsgHistoryLimit: 'Bao nhiêu cuộc trò chuyện được trả lại trong một yêu cầu',
    conversationsListApi: 'Lấy danh sách cuộc trò chuyện',
    conversationsListApiTip: 'Lấy danh sách phiên của người dùng hiện tại. Theo mặc định, trả về 20 phiên cuối cùng.',
    conversationsListFirstIdTip: 'ID của bản ghi cuối cùng trên trang hiện tại, mặc định không có.',
    conversationsListLimitTip: 'Bao nhiêu cuộc trò chuyện được trả lại trong một yêu cầu',
    conversationRenamingApi: 'Đổi tên cuộc trò chuyện',
    conversationRenamingApiTip: 'Đổi tên cuộc trò chuyện; tên sẽ được hiển thị trong giao diện nhiều phiên.',
    conversationRenamingNameTip: 'Tên mới',
    parametersApi: 'Thu thập thông tin tham số ứng dụng',
    parametersApiTip: 'Truy xuất các tham số Đầu vào được cấu hình, bao gồm tên biến, tên trường, loại và giá trị mặc định. Thường được sử dụng để hiển thị các trường này trong một biểu mẫu hoặc điền vào các giá trị mặc định sau khi máy khách tải.',
  },
  develop: {
    requestBody: 'Nội dung yêu cầu',
    pathParams: 'Thông số đường dẫn',
    query: 'Truy vấn',
  },
}

export default translation
