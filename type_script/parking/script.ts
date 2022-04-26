interface Car {
    brand: string;
    plate: string;
    entry: Date | string;
}

(function (){
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function courtyard(){

        function add(car: Car, is_save?: boolean){
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${car.brand}</td>
                <td>${car.plate}</td>
                <td>${car.entry}</td>
                <td>
                    <button class="delete" data-plate="${car.plate}">X</button>
                </td>
            `;

            row.querySelector(".delete")?.addEventListener("click", function(){
                remove(this.dataset.plate);
            });

            $("#courtyard")?.appendChild(row);
            if (is_save) save([...read(), car]);
        }

        function read(): Car[] {
            return localStorage.courtyard ? JSON.parse(localStorage.courtyard) : [];
        }

        function save(cars: Car[]){
            localStorage.setItem("courtyard", JSON.stringify(cars));
        }

        function render(){
            $("#courtyard")!.innerHTML = "";
            const courtyard = read();

            if (courtyard.length){
                courtyard.forEach((car) => add(car));
            }
        }

        function remove(plate: string){
            const { entry, brand } = read().find( car => car.plate === plate);

            const time = totalTime(new Date().getTime() - new Date(entry).getTime());

            if (!confirm(`O veículo ${brand} permaneceu por ${time}. Deseja encerrar?`)) return;

            save(read().filter((car) => car.plate !== plate));
            render();
        }

        function totalTime(mil: number){
            const min = Math.floor(mil / 60000);
            const sec = Math.floor((mil % 60000) / 1000);

            return `${min}m e ${sec}s`;
        }

        return { read, add, remove, save, render }
    }

    courtyard().render();
    $("#register")?.addEventListener("click", () => {
        const brand = $("#brand")?.value;
        const plate = $("#plate")?.value;
        console.log(brand, plate)

        if(!brand || !plate){
            alert("Os campos nomes e placas são obrigatórios");
            return;
        }

        courtyard().add({brand, plate, entry: new Date().toISOString()}, true);
    });
})();