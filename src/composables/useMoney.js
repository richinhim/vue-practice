import { ref } from "vue";
function useMoney(initialTotalMoney = 0) {
  const totalMoney = ref(initialTotalMoney);
  //const totalMoney = ref(0);

  function addMoney(price) {
    totalMoney.value += price;
  }
  return {
    totalMoney,
    addMoney,
  };
}

export default useMoney;
