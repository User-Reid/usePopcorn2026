import type React from "react";
import Content from "./Content";

export type ContentProps = {
  maxPreviewLength?: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
};

export default function ContentBox() {
  return (
    <div>
      <Content maxPreviewLength={5} defaultOpen={true}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet a quis
        hic exercitationem eos optio laborum, doloremque adipisci quidem ipsa?
        Temporibus doloremque suscipit laborum laudantium reprehenderit pariatur
        reiciendis numquam molestiae.
      </Content>
      <Content
        maxPreviewLength={10}
        expandButtonText={"Howdy"}
        collapseButtonText={"Cya"}
        buttonColor={"red"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat minima
        quibusdam fugit. Saepe dicta quis quas corporis omnis labore cum velit
        recusandae! Exercitationem quibusdam nobis magni sit magnam. Quae, fuga.
      </Content>
      <Content maxPreviewLength={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquid
        corporis labore perferendis ducimus cum veniam officia, excepturi eum
        nam facere error! Esse iste sequi laborum, ipsa doloribus nobis quis.
      </Content>
    </div>
  );
}
