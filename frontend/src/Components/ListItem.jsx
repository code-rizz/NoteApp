import React from "react";
import { motion, stagger } from "framer-motion";

const ListItem = (props) => {
  return (
    <motion.div
      layout
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="my-2 bg-white shadow-sm w-full py-2 rounded-lg px-4 cursor-pointer select-none"
      onClick={props.onClick}
      transition={{delay:(0.1)}}
    >
      {props.value}
    </motion.div>
  );
};

export default ListItem;
