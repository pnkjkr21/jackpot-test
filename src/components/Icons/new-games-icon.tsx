const NewGamesIcon = ({
  width = 25,
  height = 26,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width="25"
        height="25"
        transform="translate(0 0.27002)"
        fill="url(#pattern0_1_1463)"
      />
      <defs>
        <pattern
          id="pattern0_1_1463"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_1463" transform="scale(0.03125)" />
        </pattern>
        <image
          id="image0_1_1463"
          width="32"
          height="32"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAACX1JREFUWEedVw1wVcUVPmf3/rz3kpfEJCRAQNAwBhIUBFSgWBOpYIvVMm0AiVD+kuiMiILVAS28gLZONUURUSNJBVRK4kyrlp9qRbSiQAEFQasiYcCgUgwh4f3du7un7L15Aloc0zvJvPu3e77z7XfOtxehCwcRYU0NYiQCigAQgLw/RD2Jf+kd3jUAkX/Df/6/j+95dP5BpQDGtLraOwutD25kTBkHEv1fnFo5fykipiB4cTWAmpoajEQWnX3/nIm7DEAHn/5U3W0DQv+4NQDtxcQQXMr9aLdz9ZNVM6seP2v21NyapvPGOc+DCAOIqJXPLr5fEYtVTb//j/4kSPX19cOKzM3LL8D4UBNdJkhgknOMi7Sd/8ax1TOmzHgPAAwAEPX1j86VmAhWzbj3wR++BAQINYBvXzR3RZpxsJojOUkInCQKNgNZzQYlehjYMcqEJOMklUCBggG6kCZR2dtBBY4AYiGwWF+O0RxFJsRlv4aRU2orvxHHWTr5LgOdALYWVm0M47ExHKIgmfLyV8CAkwJO5P0iAREqkMiQwCYirhA4AkgEYIgggcimDsrbMmLK06NT4vTJPEevZwgiIERA3LZm4vsZFL2Uk/QBMAEA0hvH/OAAqHy16wsyAYgToA6uAMgGVAZI5HSKp+26YvK6K/UgP+6ZvL/DgAZQA4jjnrthbwapEp2pBwASoInWQVGdlggwYASgUPOiUWhYHHVy3JMdAlMEDrMphvyzoRWbLtF16gVMafIbQN9SSASAjX9uzOGQEgUMNY0ExJI+AN0BOuu7M/0zGkcTCDmgcgiZgZJl6LEURadl2OS3envsegWZ4j/FiL4XAfZM7vLb+gV3DrTw5NU5wRMl4LQDKgkGQ0AmwadWM6DP/WkIGKgUsWh696WKgZBZXzfHeyy9ODM+R5jx3LgKfxiLFrx5kA3eP33W7BX6vXIAjqWlpcZt5eVzCsLbrg+x1pE2T4Q4SODCFQYJzshBBH/9AQUASUDlr70vQiQFTK+CcqXVkSC+jpnyep5gsaJb9w3Y03DFboNbg7llen0qRhntJ5N57xxK9t/4bPX6FR4XW1dPez2fTlwrLKEAEsBlDEDFgVGCMRCe4LTO/XwFoNRAvJUHVyJwg28hgsEIeLj3zOZBax+4YuKQvOjKtUcnZI7r/srLIUv9lHMTOdgoWQA6TFskWc7bPypfda0HYMPaqsY+8kg5Q6UYRYHJOCDEGKME6FJigF7Z+a0IwFBMJsxka8yBJltgonZjzqPTx8gx3UMdtb2mjchZcuehIT8rTk7/Z/OFjcMLvpiYHXKqFOPIMICINsWtoPr6VK/GaytXTvYA1C1fNmNQ5voF6SpWaKqkAnSYQXFg4AAy4andY4EAXGW+3tLhvrDsxdCmscOPZ5SVGPcpgycvnnp01qGGHs+/+2n6sn4XJq9v2Fr456v6tOX3z1PX5GbIiNQVwhFdDADJ3OY3O8oW3j573vPaMFAvzstPzr2jb/obD4cEWowcQIoBkqPbigjYzGmL07o0Cwf/bUdsUmu7TPx6dMZTaCfKFLi7Udgj2k7x6g0fZG0adBEW9Uo7Pi6m+Ikht3++eOODg24p7uGsdpEDAccYmc5H0WvumTS79jGvKiKRCNu/P4JNTSDfqStdmWe0zjTQBaUU2HiqlTHMBpDH73veHXT3eHtCZno8o2Bq6+ID9UW/ff/I8aav2rOiNw+T+yTF+Z6jxnU/+U3Lu7ue6FXZO9NYuqMlY3KfcHxUVgDvFp56OH7h9lz14+rXppWXA29qIoURiLAtpaf/t4B458mRf+1mn7jJxAQc76BFQ2c3L9m7ovfC/HRY2B4Vs+peo/XzJ8hXx8yzRj5QpfKuKsLFDKxfepaPEgnYly991O2akm7/KeubIZ510ILTIUApIEEWKmLwley2fmTVWzf4AMoBdSFpHTQ+8qsFReE9SwIGIsNWIJW54ZLKg+OGDsjt8UylcUn3C1hVz+lHKz7/U94TShl//+RLe/uwfs4m17Wee68la+3A7m0R23BnAbJjHFWeVEo5inMdVCnlA5AcknYQ9h8rWlA+r/H3pVBqeMGfWDqvYkRo88NpeDIf0VGMJ1imGZQv7bGGDOzpFGYajtrxobm7+aRK/mIE9O6RxRbmT/18vJ6gof5oSXbQvT1gqolJhSGuEugQRyH9fZAEAkkAQlogiYMDhkq66V9uOzV27q0dZpP30ublY9f1TP9iApMJ4sxRCJIFhIA48ocXrUo8+ni1vUOStfquNeHfrXl1b7Tthb6bBbEmy3AmGYijSLcHvzPpQ/ckdBSAI7nfxonAkRYIyUAYJoCVRYed3HVjpq2/2dNA2cqda/KNE5OZalMGiwEHxQwpiaE6MvdpcWVttTknFDDnS2a+zkDus5mskAC5Oj/fiPwOT6BQdjYoqRRIKb02LQkhIU3QyyEwABDk0BIreWH0jHUVqMUw+rLITX0ydw7vxg+MzU5LXmYwCVwpSWDw9mh8VsgwstKC/BFmozSA0GIKBHGmuz7TlqCtzwcAQvOntGuQV0lahNrEk541I0Td8AcHkr02HGm/esddC+b/BbUhNHqv+Vk03lN8Y2HP5PiczI4KmwvDNCy0EL1MHIZggQSL6awsb4U7GfC0TCTB1RatGChNPUgQmgkRTEbd9Bd3fhx8ecrSfzVGIqeHRbT/gTp3P0Cev0AZlvGGuk93hwN8oN7xcK/EAFxGYKMCQ2969Iajcy+gReb7k/KzVwBCe79fgiqu8JM1MytLIhDxDeXMcf4d+8fPFGwNW8Zwjgp9K/Y2Wmh4/YzpwvcMSgtMB9TXKcEp0gz5julKpJhgbxRVtlwHOjs8CwB9zyfDh3V9XgmZeAP3dkE6KHimy8gPrunVjqgXxyuA1CeBBnT6e0BTq0tQKKaigjcWzWqp6BKAbbXFT+VnxystQ5uSV04agj7T3vENiSkAqex9LfjM6IWQYMOxDqth6JxDlV0CsHH+ZTN7X/RVbZDzmHRhb1sM9rXHxfvhsFWQk0YPhWxNDCMSessmKSFQtbXjovaYezAjBJcHLTbEsqC/YEb2J4fDd9z4wMcNHvk/dAnOEsp3Trcv6/dQdppzr20w0qUmBGFHu/WHy+d9du/5xqVc99vPu/xpltoKbn9swOqssLhFT+jIcOOllbsnfR/o8z37fwB4cxUXg7Vq5qglCUPAnavd+3f9fJeESKciu4CkawC0uL3S88pO9/3OL/Nzvoq7EB7gv5hXwRmM+edYAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default NewGamesIcon;
