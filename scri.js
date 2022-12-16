
.link-flash {
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);

  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: -0.1rem;
    display: block;
    width: 100%;
    height: 1px;
    background: var(--primary-color);
    transition: 1.1s var(--ease-out-expo);
  }
  
  // 默认情况下，前条收缩，后条伸展
  // 悬浮时，后条先缩回右边，前条再伸出来
  // 松开时，前条先缩回左边，后条再伸出来

  &::before {
    transform: scaleX(0);
    transform-origin: left;
  }

  &::after {
    transform-origin: right;
    transition-delay: 0.25s;
  }
  
  &:hover {
    &::before {
      transform: scaleX(1);
      transition-delay: 0.25s;
    }

    &::after {
      transform: scaleX(0);
      transition-delay: 0s;
    }
  }
}

a {
  color: white;
  text-decoration: none;
}