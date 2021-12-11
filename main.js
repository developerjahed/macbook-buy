const memory16=document.getElementById('update-memory');
memory16.addEventListener('click', function(){
    const memoryCost=document.getElementById('memory-cost');
    memoryCost.innerText='100';
});

const storage16=document.getElementById('update-storage');
storage16.addEventListener('click', function(){
    const storageCost=document.getElementById('extra-storage');
    storageCost.innerText='120';
});

const deliveryCharge=document.getElementById('delivery-charge');
deliveryCharge.addEventListener('click', function(){
    const deliveryCost=document.getElementById('delivery-cost');
    deliveryCost.innerText='120';
});


