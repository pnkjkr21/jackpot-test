import React from "react";

const GameShowsIcon = ({ width = 17, height = 18, fill = "#ff9933" }: { width?: number, height?: number, fill?: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.826 16.636L12.648 12.8L10.589 17.5H16.489C16.5891 17.4999 16.6869 17.4695 16.7695 17.413C16.8522 17.3564 16.9159 17.2763 16.9522 17.183C16.9886 17.0897 16.9961 16.9876 16.9735 16.89C16.951 16.7924 16.8996 16.7039 16.826 16.636ZM0.194999 16.636C0.121402 16.7039 0.0699873 16.7924 0.0474658 16.89C0.0249444 16.9876 0.0323622 17.0897 0.0687511 17.183C0.10514 17.2763 0.16881 17.3564 0.251449 17.413C0.334089 17.4695 0.431859 17.4999 0.531998 17.5H6.432L4.372 12.801L0.194999 16.636ZM8.51 9.003L5.15 12.089L7.519 17.5H9.502L11.872 12.089L8.51 9.003ZM0.499998 1.495H1.696V2.617C1.32223 2.70544 0.978844 2.89203 0.701279 3.15751C0.423715 3.42298 0.222033 3.75773 0.117056 4.12719C0.0120779 4.49665 0.00760806 4.88744 0.104108 5.2592C0.200607 5.63097 0.394579 5.97024 0.665998 6.242L1.96 7.534L1.608 7.886C1.55962 7.93173 1.5209 7.98671 1.49413 8.04766C1.46736 8.10862 1.45308 8.17433 1.45215 8.2409C1.45121 8.30747 1.46363 8.37355 1.48868 8.43524C1.51372 8.49692 1.55088 8.55296 1.59796 8.60004C1.64504 8.64712 1.70107 8.68428 1.76276 8.70932C1.82445 8.73436 1.89053 8.74679 1.9571 8.74585C2.02367 8.74492 2.08938 8.73064 2.15033 8.70387C2.21129 8.6771 2.26626 8.63838 2.312 8.59L6.074 4.834C6.12365 4.78843 6.16355 4.73328 6.19131 4.67188C6.21906 4.61047 6.23409 4.54407 6.23549 4.4767C6.23689 4.40932 6.22462 4.34236 6.19943 4.27986C6.17425 4.21735 6.13666 4.16059 6.08894 4.11301C6.04122 4.06543 5.98436 4.028 5.92178 4.00299C5.85921 3.97798 5.79221 3.96591 5.72484 3.9675C5.65747 3.96908 5.59112 3.9843 5.52979 4.01223C5.46846 4.04016 5.41342 4.08022 5.368 4.13L5.016 4.482L3.722 3.19C3.4394 2.90592 3.08239 2.70731 2.692 2.617V1.495H14.328V2.617C13.938 2.708 13.581 2.907 13.298 3.191L12.005 4.482L11.653 4.13C11.5573 4.04933 11.4348 4.00751 11.3097 4.0128C11.1846 4.01808 11.0661 4.07009 10.9775 4.15855C10.8889 4.247 10.8367 4.36547 10.8313 4.49053C10.8258 4.61559 10.8675 4.73816 10.948 4.834L14.709 8.592C14.7554 8.63829 14.8104 8.675 14.8709 8.70003C14.9315 8.72505 14.9963 8.73791 15.0619 8.73786C15.1274 8.73782 15.1922 8.72487 15.2527 8.69975C15.3132 8.67464 15.3682 8.63786 15.4145 8.5915C15.4608 8.54514 15.4975 8.49012 15.5225 8.42958C15.5476 8.36904 15.5604 8.30416 15.5604 8.23865C15.5603 8.17313 15.5474 8.10827 15.5223 8.04777C15.4971 7.98726 15.4604 7.93229 15.414 7.886L15.061 7.534L16.355 6.243C16.6267 5.97127 16.8209 5.63192 16.9175 5.26002C17.0142 4.88812 17.0098 4.49716 16.9048 4.12754C16.7998 3.75791 16.598 3.42302 16.3203 3.15746C16.0426 2.89191 15.699 2.70533 15.325 2.617V1.495H16.522C16.6473 1.48526 16.7643 1.42863 16.8496 1.3364C16.9349 1.24418 16.9823 1.12315 16.9823 0.9975C16.9823 0.87185 16.9349 0.750824 16.8496 0.658598C16.7643 0.566372 16.6473 0.509735 16.522 0.5H0.498998C0.400671 0.500331 0.304632 0.529705 0.222942 0.584433C0.141252 0.639161 0.0775514 0.716804 0.0398391 0.807613C0.00212669 0.898422 -0.00791647 0.998349 0.0109706 1.09485C0.0298577 1.19134 0.0768331 1.28011 0.145999 1.35C0.239999 1.444 0.365998 1.495 0.498998 1.495"
        fill={fill}
      />
    </svg>
  );
};

export default GameShowsIcon;
