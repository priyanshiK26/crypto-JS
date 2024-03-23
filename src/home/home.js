fetch('https://api.coincap.io/v2/assets')
    .then((data) => {
        return data.json()
    }).then((objectData) => {
        let datas = objectData.data
        console.log(datas[0].symbol);
        let tableData = '';
        datas.map((values) => {
            tableData += "<tr>";
            tableData += "<td>" + values.id + "</td>";
            tableData += "<td>" + values.rank+ "</td>";
            tableData += "<td>" + values.name + "</td>";
            tableData += "<td>" + values.symbol + "</td>";
            tableData += "<td>" + values.price + "</td>";

        })
        document.getElementById('data').innerHTML = tableData;
    })
