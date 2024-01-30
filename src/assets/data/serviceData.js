import { AiFillBuild , AiFillDelete} from "react-icons/ai";
import { MdLocalShipping,MdOutlinePayment , MdOutlineSecurity } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";

const serviceData = [
    {
      icon: <MdLocalShipping />,
      title: "Miễn phí giao hàng",
      subtitle: "giao hàng 24/7 nhanh tiện lợi đảm bảo có hàng sớm sau khi đặt  ",
      bg: "#fdefe6",
    },
    {
      icon: <IoMdRefresh />,
      title: "Hoàn trả dễ dàng",
      subtitle: "Khách hàng có thể dễ dàng hoàn trả sau 1 tuần kể từ khi mua hàng ",
      bg: "#ceebe9",
    },
    {
      icon: <MdOutlinePayment />,
      title: "Dễ dàng thanh toán",
      subtitle: "Khách hàng có thể thanh toán bằng tiền mặt hoặc thẻ ngân hàng",
      bg: "#e2f2b2",
    },
    {
      icon: <MdOutlineSecurity />,
      title: " Bảo mật tuyệt đối",
      subtitle: "Yên tâm! Thông tin của khách hàng là “thông tin của khách hàng",
      bg: "#d6e5fb",
    },
  ];
  
  export default serviceData;
  