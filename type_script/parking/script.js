(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function courtyard() {
        function add(car, is_save) {
            var _a, _b;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${car.brand}</td>
                <td>${car.plate}</td>
                <td>${car.entry}</td>
                <td>
                    <button class="delete" data-plate="${car.plate}">X</button>
                </td>
            `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remove(this.dataset.plate);
            });
            (_b = $("#courtyard")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (is_save)
                save([...read(), car]);
        }
        function read() {
            return localStorage.courtyard ? JSON.parse(localStorage.courtyard) : [];
        }
        function save(cars) {
            localStorage.setItem("courtyard", JSON.stringify(cars));
        }
        function render() {
            $("#courtyard").innerHTML = "";
            const courtyard = read();
            if (courtyard.length) {
                courtyard.forEach((car) => add(car));
            }
        }
        function remove(plate) {
            const { entry, brand } = read().find(car => car.plate === plate);
            const time = totalTime(new Date().getTime() - new Date(entry).getTime());
            if (!confirm(`O veículo ${brand} permaneceu por ${time}. Deseja encerrar?`))
                return;
            save(read().filter((car) => car.plate !== plate));
            render();
        }
        function totalTime(mil) {
            const min = Math.floor(mil / 60000);
            const sec = Math.floor((mil % 60000) / 1000);
            return `${min}m e ${sec}s`;
        }
        return { read, add, remove, save, render };
    }
    courtyard().render();
    (_a = $("#register")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const brand = (_a = $("#brand")) === null || _a === void 0 ? void 0 : _a.value;
        const plate = (_b = $("#plate")) === null || _b === void 0 ? void 0 : _b.value;
        console.log(brand, plate);
        if (!brand || !plate) {
            alert("Os campos nomes e placas são obrigatórios");
            return;
        }
        courtyard().add({ brand, plate, entry: new Date().toISOString() }, true);
    });
})();
