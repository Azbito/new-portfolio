import * as S from "@/styles/elements/styled-components";
import SleepingKitty from "@/images/sleeping.gif";
import Image from "next/image";

export function LoadingModal() {
  return (
    <S.ModalBackground>
      <S.ModalContent>
        <Image
          src={SleepingKitty}
          alt="sleepy kitten"
          width={500}
          height={500}
        />
        <p>Loading...</p>
      </S.ModalContent>
    </S.ModalBackground>
  );
}
