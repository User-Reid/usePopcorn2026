import type React from "react";
import Content from "./Content";

export type ContentProps = {
  maxPreviewLength?: number;
  container?: string;
  children: React.ReactNode;
};

export default function ContentBox() {
  return (
    <div>
      <Content maxPreviewLength={50} container={"div"}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a quis
        hic exercitationem eos optio laborum, doloremque adipisci quidem ipsa?
        Temporibus doloremque suscipit laborum laudantium reprehenderit pariatur
        reiciendis numquam molestiae.
      </Content>
      <Content maxPreviewLength={50} container={"div"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat minima
        quibusdam fugit. Saepe dicta quis quas corporis omnis labore cum velit
        recusandae! Exercitationem quibusdam nobis magni sit magnam. Quae, fuga.
      </Content>
      <Content maxPreviewLength={50} container={"div"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquid
        corporis labore perferendis ducimus cum veniam officia, excepturi eum
        nam facere error! Esse iste sequi laborum, ipsa doloribus nobis quis.
      </Content>
    </div>
  );
}
