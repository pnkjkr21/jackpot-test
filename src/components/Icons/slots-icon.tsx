import React from "react";

const SlotsIcon = ({ width = 30, height = 30, fill = "#ff9933" }: { width?: number, height?: number, fill?: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.987 15.5121H18V8.47412H12.986L12.987 15.5121ZM14.978 11.6131V11.0301C14.978 10.2051 15.648 9.53512 16.472 9.53512V10.5311C16.3399 10.5316 16.2134 10.5844 16.1201 10.6779C16.0268 10.7714 15.9743 10.898 15.974 11.0301V11.6141C16.2649 11.7177 16.5167 11.9084 16.6952 12.1604C16.8736 12.4124 16.9699 12.7134 16.971 13.0221C16.9699 13.3171 16.8816 13.6051 16.7173 13.85C16.5529 14.0949 16.3199 14.2858 16.0474 14.3987C15.7749 14.5115 15.4751 14.5413 15.1857 14.4842C14.8964 14.4272 14.6303 14.2859 14.421 14.0781C14.243 13.8996 14.113 13.679 14.0432 13.4368C13.9733 13.1946 13.9658 12.9387 14.0214 12.6928C14.077 12.447 14.1938 12.2191 14.3611 12.0305C14.5283 11.8419 14.7405 11.6987 14.978 11.6141M3.52299 13.5201C3.65494 13.5201 3.78148 13.4677 3.87478 13.3744C3.96808 13.2811 4.02049 13.1546 4.02049 13.0226C4.02049 12.8907 3.96808 12.7641 3.87478 12.6708C3.78148 12.5775 3.65494 12.5251 3.52299 12.5251C3.39491 12.5309 3.27397 12.5858 3.18536 12.6785C3.09675 12.7711 3.0473 12.8944 3.0473 13.0226C3.0473 13.1508 3.09675 13.2741 3.18536 13.3668C3.27397 13.4595 3.39491 13.5144 3.52299 13.5201Z"
        fill={fill}
      />
      <path
        d="M6.013 8.47293H1V15.5119H6.013V8.47293ZM3.523 14.5159C3.12693 14.5154 2.74723 14.3578 2.46717 14.0778C2.1871 13.7977 2.02953 13.418 2.029 13.0219C2.029 12.3719 2.446 11.8189 3.026 11.6139V11.0299C3.026 10.2049 3.696 9.53493 4.52 9.53493V10.5319C4.38808 10.5325 4.26172 10.5851 4.16844 10.6784C4.07516 10.7717 4.02253 10.898 4.022 11.0299V11.6139C4.31271 11.7176 4.56434 11.9085 4.74259 12.1605C4.92084 12.4125 5.01701 12.7133 5.018 13.0219C5.01747 13.418 4.8599 13.7977 4.57983 14.0778C4.29977 14.3578 3.91907 14.5154 3.523 14.5159ZM1 5.98193H18V7.47693H1V5.98193ZM9.5 13.5189C9.56699 13.5215 9.63381 13.5105 9.69648 13.4867C9.75916 13.4629 9.8164 13.4268 9.86482 13.3804C9.91324 13.3341 9.95184 13.2784 9.97833 13.2168C10.0048 13.1553 10.0186 13.089 10.019 13.0219C10.0188 12.9548 10.005 12.8884 9.97862 12.8267C9.95219 12.765 9.91361 12.7093 9.86518 12.6628C9.81675 12.6163 9.75946 12.5801 9.69672 12.5562C9.63398 12.5324 9.56707 12.5214 9.5 12.5239C9.37191 12.5297 9.25098 12.5846 9.16237 12.6773C9.07376 12.7699 9.02431 12.8932 9.02431 13.0214C9.02431 13.1496 9.07376 13.2729 9.16237 13.3656C9.25098 13.4583 9.37191 13.5132 9.5 13.5189ZM1 16.5079H18V18.4999H1V16.5079Z"
        fill={fill}
      />
      <path
        d="M7.01 8.473V15.511H11.99V8.473H7.01ZM9.5 14.516C9.10393 14.5155 8.72423 14.3579 8.44417 14.0778C8.1641 13.7978 8.00653 13.4181 8.006 13.022C8.006 12.372 8.422 11.818 9.002 11.613V11.029C9.002 10.205 9.672 9.535 10.496 9.535V10.531C10.3641 10.5315 10.2377 10.5842 10.1444 10.6774C10.0512 10.7707 9.99853 10.8971 9.998 11.029V11.613C10.2355 11.6976 10.4479 11.8409 10.6152 12.0295C10.7825 12.2182 10.8995 12.446 10.9551 12.692C11.0108 12.9379 11.0034 13.194 10.9336 13.4363C10.8639 13.6786 10.734 13.8993 10.556 14.078C10.276 14.358 9.896 14.516 9.5 14.516ZM15.476 13.519C15.5773 13.5239 15.6777 13.4976 15.7637 13.4438C15.8497 13.39 15.9172 13.3111 15.957 13.2178C15.9969 13.1245 16.0072 13.0212 15.9866 12.9219C15.9661 12.8225 15.9156 12.7318 15.842 12.662C15.7934 12.6156 15.7359 12.5794 15.6731 12.5557C15.6102 12.532 15.5431 12.5212 15.476 12.524C15.4088 12.521 15.3417 12.5316 15.2787 12.5553C15.2157 12.5789 15.1582 12.6151 15.1095 12.6616C15.0609 12.7081 15.0222 12.7639 14.9958 12.8258C14.9693 12.8876 14.9557 12.9542 14.9557 13.0215C14.9557 13.0888 14.9693 13.1554 14.9958 13.2172C15.0222 13.2791 15.0609 13.3349 15.1095 13.3814C15.1582 13.4279 15.2157 13.4641 15.2787 13.4877C15.3417 13.5114 15.4088 13.522 15.476 13.519ZM16.971 3.492H13.901C13.403 2.027 11.065 1.5 9.5 1.5C7.941 1.5 5.596 2.029 5.1 3.492H2.03V4.987H16.97L16.971 3.492ZM10.994 3.99H8.006V2.994H10.994V3.99Z"
        fill={fill}
      />
    </svg>
  );
};

export default SlotsIcon;
