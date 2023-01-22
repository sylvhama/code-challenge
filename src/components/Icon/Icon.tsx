interface Props {
  source: "star" | "left-arrow" | "left-chevron" | "right-chevron";
}

export function Icon({ source }: Props) {
  switch (source) {
    case "star":
      return <Star />;
    case "left-arrow":
      return <LeftArrow />;
    case "left-chevron":
      return <LeftChevron />;
    case "right-chevron":
      return <RightChevron />;
  }
}

function Star() {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33458 1.02748C7.54469 0.383747 8.45537 0.383739 8.66548 1.02748L10.0242 5.19034H14.4201C15.0989 5.19034 15.3804 6.05969 14.8303 6.45753L11.2767 9.02775L12.6342 13.187C12.8445 13.8314 12.1078 14.3687 11.5586 13.9714L8.00003 11.3977L4.44151 13.9714C3.89229 14.3687 3.15551 13.8314 3.36582 13.187L4.72337 9.02775L1.16977 6.45753C0.619694 6.05968 0.90113 5.19034 1.58 5.19034H5.97586L7.33458 1.02748ZM8.00003 2.21154L6.85897 5.70754C6.76498 5.9955 6.49644 6.19034 6.19352 6.19034H2.50669L5.48667 8.34568C5.73312 8.52393 5.83627 8.84092 5.74189 9.13007L4.60255 12.6208L7.58979 10.4602C7.83462 10.2831 8.16544 10.2831 8.41026 10.4602L11.3975 12.6208L10.2582 9.13007C10.1638 8.84092 10.2669 8.52392 10.5134 8.34568L13.4934 6.19034H9.80654C9.50362 6.19034 9.23507 5.9955 9.14109 5.70754L8.00003 2.21154Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LeftChevron() {
  return (
    <svg
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.35352 0.979699C7.54878 1.17496 7.54878 1.49154 7.35352 1.68681L1.0404 7.99992L7.35352 14.313C7.54878 14.5083 7.54878 14.8249 7.35352 15.0201C7.15826 15.2154 6.84167 15.2154 6.64641 15.0201L0.333299 8.70703C-0.057225 8.3165 -0.0572267 7.68334 0.333299 7.29281L6.64641 0.979699C6.84167 0.784436 7.15826 0.784436 7.35352 0.979699Z"
        fill="currentColor"
      />
    </svg>
  );
}

function RightChevron() {
  return (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.979822 0.979699C1.17508 0.784437 1.49167 0.784436 1.68693 0.979698L8.00005 7.29282C8.39058 7.68334 8.39058 8.31651 8.00005 8.70703L1.68693 15.0202C1.49166 15.2154 1.17508 15.2154 0.97982 15.0201C0.784558 14.8249 0.784559 14.5083 0.979821 14.313L7.29295 7.99992L0.979822 1.68681C0.78456 1.49154 0.78456 1.17496 0.979822 0.979699Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LeftArrow() {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.35376 1.68681C7.54902 1.49154 7.54902 1.17496 7.35376 0.979699C7.1585 0.784436 6.84192 0.784436 6.64666 0.979699L0.333543 7.29281C-0.0569825 7.68334 -0.0569809 8.3165 0.333543 8.70703L6.64666 15.0201C6.84192 15.2154 7.1585 15.2154 7.35376 15.0201C7.54902 14.8249 7.54902 14.5083 7.35376 14.313L1.54073 8.5H14.3336C14.6098 8.5 14.8336 8.27614 14.8336 8C14.8336 7.72386 14.6098 7.5 14.3336 7.5H1.54057L7.35376 1.68681Z"
        fill="currentColor"
      />
    </svg>
  );
}
