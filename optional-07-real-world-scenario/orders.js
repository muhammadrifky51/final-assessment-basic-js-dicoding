// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  orders.push({
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: items.reduce((total,item)=>{
      return total+=item.price
    },0),
    status: 'Menunggu'
  });
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  orders.forEach((order)=>{
    if(order.id==orderId){
      order.status=status;
    }
  });
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
