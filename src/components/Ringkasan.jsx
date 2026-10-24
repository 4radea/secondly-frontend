export default function Ringkasan({ totalProduk, totalTersedia }) {
    return (
    <div className="ringkasan">
        <div>
            <h3>Total Barang</h3>
            <p>{totalProduk} Item</p>
            </div>
            <div>
                <h3>Status Tersedia</h3>
                <p>{totalTersedia} Item</p>
                </div>
                </div>
    );
}