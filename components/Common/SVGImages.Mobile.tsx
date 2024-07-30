import Svg, { Circle, G, Mask, Path, Rect } from 'react-native-svg';
import useColors from './Color.Mobile';
import { View } from 'react-native';
import createStyles from './StyleSheet';
const Tick = ()=>{
    const styles = createStyles(useColors());
    return(
    <Svg width="20" height="25" viewBox="-15 -10 165 100" fill="none">
        <Path d="M42.4555 73.527L1.83051 40.8401C-0.610169 38.8763 -0.610169 35.6923 1.83051 33.7283L10.6691 26.6166C13.1098 24.6526 17.0673 24.6526 19.508 26.6166L46.875 48.6359L105.492 1.47283C107.933 -0.490942 111.89 -0.490942 114.331 1.47283L123.169 8.58458C125.61 10.5484 125.61 13.7324 123.169 15.6963L51.2944 73.5272C48.8535 75.491 44.8962 75.491 42.4555 73.527Z" fill={styles.color1.backgroundColor} />
    </Svg>
    )
};
const WiFi = ()=>{
    const styles = createStyles(useColors());
    return(
    <Svg width="50" height="40" viewBox="0 0 50 40" fill="none">
        <Path d="M49.6023 10.9714C35.7609 -3.65982 14.2335 -3.65446 0.39759 10.9714C-0.122723 11.5214 -0.132879 12.4527 0.370246 13.0232L3.04525 16.0562C3.52494 16.6009 4.29681 16.6125 4.79525 16.0902C16.1953 4.15447 33.8031 4.15179 45.2054 16.0902C45.7039 16.6125 46.4757 16.6 46.9554 16.0562L49.6304 13.0232C50.1328 12.4527 50.1226 11.5214 49.6023 10.9714ZM24.9999 28.5714C22.2382 28.5714 19.9999 31.1295 19.9999 34.2857C19.9999 37.442 22.2382 40 24.9999 40C27.7617 40 30 37.442 30 34.2857C30 31.1295 27.7617 28.5714 24.9999 28.5714ZM40.8335 21.108C31.8289 12.0071 18.1609 12.017 9.16634 21.108C8.62728 21.6527 8.6101 22.5982 9.12181 23.175L11.8124 26.2098C12.2812 26.7384 13.0359 26.7741 13.5351 26.2813C20.0937 19.8018 29.921 19.8161 36.464 26.2813C36.9632 26.7741 37.7179 26.7393 38.1867 26.2098L40.8773 23.175C41.3898 22.5982 41.3718 21.6518 40.8335 21.108Z" fill={styles.color4.backgroundColor} />
    </Svg>
    )
};
const USB = ()=>{
    const styles = createStyles(useColors());
    return(
      <Svg width="26" height="34" viewBox="0 0 26 34" fill="none">
        <Path d="M13.3792 2V24.7586" stroke={styles.color4.backgroundColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M13.3792 20.2069L21.724 17.1724V11.8621" stroke={styles.color4.backgroundColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M13.3795 23.2413L5.03467 20.9655V16.4138" stroke={styles.color4.backgroundColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M13.3793 32.3449C15.4741 32.3449 17.1724 30.6466 17.1724 28.5518C17.1724 26.4569 15.4741 24.7587 13.3793 24.7587C11.2844 24.7587 9.58618 26.4569 9.58618 28.5518C9.58618 30.6466 11.2844 32.3449 13.3793 32.3449Z" stroke={styles.color4.backgroundColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M19.4482 7.31036V11.8621H24V7.31036H19.4482Z" stroke={styles.color4.backgroundColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M10.345 5.03448L13.3795 2L16.4139 5.03448" stroke={styles.color4.backgroundColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M5.03448 15.6552C6.71038 15.6552 8.06897 14.2967 8.06897 12.6207C8.06897 10.9448 6.71038 9.58624 5.03448 9.58624C3.35858 9.58624 2 10.9448 2 12.6207C2 14.2967 3.35858 15.6552 5.03448 15.6552Z" stroke={styles.color4.backgroundColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </Svg>
    )
};
const Server = ()=>{
    const styles = createStyles(useColors());
    return(
    <Svg width="53" height="40" viewBox="0 0 53 40" fill="none">
        <Path d='M7.32386 27.7102C7.27841 27.2519 7.08333 26.8958 6.73864 26.642C6.39394 26.3883 5.92614 26.2614 5.33523 26.2614C4.93371 26.2614 4.5947 26.3182 4.31818 26.4318C4.04167 26.5417 3.82955 26.6951 3.68182 26.892C3.53788 27.089 3.46591 27.3125 3.46591 27.5625C3.45833 27.7708 3.50189 27.9527 3.59659 28.108C3.69508 28.2633 3.82955 28.3977 4 28.5114C4.17045 28.6212 4.36742 28.7178 4.59091 28.8011C4.81439 28.8807 5.05303 28.9489 5.30682 29.0057L6.35227 29.2557C6.85985 29.3693 7.32576 29.5208 7.75 29.7102C8.17424 29.8996 8.54167 30.1326 8.85227 30.4091C9.16288 30.6856 9.40341 31.0114 9.57386 31.3864C9.74811 31.7614 9.83712 32.1913 9.84091 32.6761C9.83712 33.3883 9.6553 34.0057 9.29545 34.5284C8.93939 35.0473 8.42424 35.4508 7.75 35.7386C7.07955 36.0227 6.27083 36.1648 5.32386 36.1648C4.38447 36.1648 3.56629 36.0208 2.86932 35.733C2.17614 35.4451 1.63447 35.0189 1.24432 34.4545C0.857955 33.8864 0.655303 33.1837 0.636364 32.3466H3.01705C3.04356 32.7367 3.1553 33.0625 3.35227 33.3239C3.55303 33.5814 3.82008 33.7765 4.15341 33.9091C4.49053 34.0379 4.87121 34.1023 5.29545 34.1023C5.71212 34.1023 6.07386 34.0417 6.38068 33.9205C6.69129 33.7992 6.93182 33.6307 7.10227 33.4148C7.27273 33.1989 7.35795 32.9508 7.35795 32.6705C7.35795 32.4091 7.2803 32.1894 7.125 32.0114C6.97348 31.8333 6.75 31.6818 6.45455 31.5568C6.16288 31.4318 5.80492 31.3182 5.38068 31.2159L4.11364 30.8977C3.13258 30.6591 2.35795 30.286 1.78977 29.7784C1.22159 29.2708 0.939394 28.5871 0.943182 27.7273C0.939394 27.0227 1.12689 26.4072 1.50568 25.8807C1.88826 25.3542 2.41288 24.9432 3.07955 24.6477C3.74621 24.3523 4.50379 24.2045 5.35227 24.2045C6.21591 24.2045 6.9697 24.3523 7.61364 24.6477C8.26136 24.9432 8.76515 25.3542 9.125 25.8807C9.48485 26.4072 9.67045 27.017 9.68182 27.7102H7.32386ZM15.4276 36.1705C14.5298 36.1705 13.7571 35.9886 13.1094 35.625C12.4654 35.2576 11.9692 34.7386 11.6207 34.0682C11.2723 33.3939 11.098 32.5966 11.098 31.6761C11.098 30.7784 11.2723 29.9905 11.6207 29.3125C11.9692 28.6345 12.4598 28.1061 13.0923 27.7273C13.7287 27.3485 14.4749 27.1591 15.331 27.1591C15.9067 27.1591 16.4427 27.2519 16.9389 27.4375C17.4389 27.6193 17.8745 27.8939 18.2457 28.2614C18.6207 28.6288 18.9124 29.0909 19.1207 29.6477C19.3291 30.2008 19.4332 30.8485 19.4332 31.5909V32.2557H12.0639V30.7557H17.1548C17.1548 30.4072 17.0791 30.0985 16.9276 29.8295C16.776 29.5606 16.5658 29.3504 16.2969 29.1989C16.0317 29.0436 15.723 28.9659 15.3707 28.9659C15.0033 28.9659 14.6776 29.0511 14.3935 29.2216C14.1132 29.3883 13.8935 29.6136 13.7344 29.8977C13.5753 30.178 13.4938 30.4905 13.4901 30.8352V32.2614C13.4901 32.6932 13.5696 33.0663 13.7287 33.3807C13.8916 33.6951 14.1207 33.9375 14.4162 34.108C14.7116 34.2784 15.062 34.3636 15.4673 34.3636C15.7363 34.3636 15.9825 34.3258 16.206 34.25C16.4295 34.1742 16.6207 34.0606 16.7798 33.9091C16.9389 33.7576 17.0601 33.572 17.1435 33.3523L19.3821 33.5C19.2685 34.0379 19.0355 34.5076 18.6832 34.9091C18.3348 35.3068 17.884 35.6174 17.331 35.8409C16.7817 36.0606 16.1473 36.1705 15.4276 36.1705ZM21.0128 36V27.2727H23.3594V28.7955H23.4503C23.6094 28.2538 23.8764 27.8447 24.2514 27.5682C24.6264 27.2879 25.0582 27.1477 25.5469 27.1477C25.6681 27.1477 25.7988 27.1553 25.9389 27.1705C26.0791 27.1856 26.2022 27.2064 26.3082 27.233V29.3807C26.1946 29.3466 26.0374 29.3163 25.8366 29.2898C25.6359 29.2633 25.4522 29.25 25.2855 29.25C24.9295 29.25 24.6113 29.3277 24.331 29.483C24.0545 29.6345 23.8348 29.8466 23.6719 30.1193C23.5128 30.392 23.4332 30.7064 23.4332 31.0625V36H21.0128ZM35.9616 27.2727L32.9105 36H30.1832L27.1321 27.2727H29.6889L31.5014 33.517H31.5923L33.3991 27.2727H35.9616ZM40.8963 36.1705C39.9986 36.1705 39.2259 35.9886 38.5781 35.625C37.9342 35.2576 37.438 34.7386 37.0895 34.0682C36.741 33.3939 36.5668 32.5966 36.5668 31.6761C36.5668 30.7784 36.741 29.9905 37.0895 29.3125C37.438 28.6345 37.9285 28.1061 38.5611 27.7273C39.1974 27.3485 39.9437 27.1591 40.7997 27.1591C41.3755 27.1591 41.9115 27.2519 42.4077 27.4375C42.9077 27.6193 43.3433 27.8939 43.7145 28.2614C44.0895 28.6288 44.3812 29.0909 44.5895 29.6477C44.7978 30.2008 44.902 30.8485 44.902 31.5909V32.2557H37.5327V30.7557H42.6236C42.6236 30.4072 42.5478 30.0985 42.3963 29.8295C42.2448 29.5606 42.0346 29.3504 41.7656 29.1989C41.5005 29.0436 41.1918 28.9659 40.8395 28.9659C40.4721 28.9659 40.1463 29.0511 39.8622 29.2216C39.5819 29.3883 39.3622 29.6136 39.2031 29.8977C39.044 30.178 38.9626 30.4905 38.9588 30.8352V32.2614C38.9588 32.6932 39.0384 33.0663 39.1974 33.3807C39.3603 33.6951 39.5895 33.9375 39.8849 34.108C40.1804 34.2784 40.5308 34.3636 40.9361 34.3636C41.205 34.3636 41.4512 34.3258 41.6747 34.25C41.8982 34.1742 42.0895 34.0606 42.2486 33.9091C42.4077 33.7576 42.5289 33.572 42.6122 33.3523L44.8509 33.5C44.7372 34.0379 44.5043 34.5076 44.152 34.9091C43.8035 35.3068 43.3527 35.6174 42.7997 35.8409C42.2505 36.0606 41.616 36.1705 40.8963 36.1705ZM46.4815 36V27.2727H48.8281V28.7955H48.919C49.0781 28.2538 49.3452 27.8447 49.7202 27.5682C50.0952 27.2879 50.527 27.1477 51.0156 27.1477C51.1368 27.1477 51.2675 27.1553 51.4077 27.1705C51.5478 27.1856 51.6709 27.2064 51.777 27.233V29.3807C51.6634 29.3466 51.5062 29.3163 51.3054 29.2898C51.1046 29.2633 50.9209 29.25 50.7543 29.25C50.3982 29.25 50.08 29.3277 49.7997 29.483C49.5232 29.6345 49.3035 29.8466 49.1406 30.1193C48.9815 30.392 48.902 30.7064 48.902 31.0625V36H46.4815Z' fill={styles.color4.backgroundColor}/>
        <Path d="M41.7614 5.76C33.4565 -1.92141 20.5401 -1.91859 12.2386 5.76C11.9264 6.04875 11.9203 6.53766 12.2221 6.83719L13.8271 8.42954C14.115 8.71547 14.5781 8.72157 14.8771 8.44735C21.7172 2.1811 32.2818 2.17969 39.1233 8.44735C39.4223 8.72157 39.8854 8.715 40.1733 8.42954L41.7783 6.83719C42.0797 6.53766 42.0736 6.04875 41.7614 5.76ZM27 15C25.3429 15 24 16.343 24 18C24 19.657 25.3429 21 27 21C28.657 21 30 19.657 30 18C30 16.343 28.657 15 27 15ZM36.5001 11.0817C31.0973 6.30375 22.8965 6.30891 17.4998 11.0817C17.1764 11.3677 17.1661 11.8641 17.4731 12.1669L19.0875 13.7602C19.3687 14.0377 19.8215 14.0564 20.1211 13.7977C24.0562 10.3959 29.9526 10.4034 33.8784 13.7977C34.1779 14.0564 34.6308 14.0381 34.912 13.7602L36.5264 12.1669C36.8339 11.8641 36.8231 11.3672 36.5001 11.0817Z" fill={styles.color4.backgroundColor} />
    </Svg>
    )
};
const SelectedBtn = ({selected}:{selected:string})=>{
    const styles = createStyles(useColors());
    return(
        <>
        {selected==='wifi' && 
        <Svg width="50" height="40" viewBox="0 0 50 40" fill="none">
        <Path d="M49.6023 10.9714C35.7609 -3.65982 14.2335 -3.65446 0.39759 10.9714C-0.122723 11.5214 -0.132879 12.4527 0.370246 13.0232L3.04525 16.0562C3.52494 16.6009 4.29681 16.6125 4.79525 16.0902C16.1953 4.15447 33.8031 4.15179 45.2054 16.0902C45.7039 16.6125 46.4757 16.6 46.9554 16.0562L49.6304 13.0232C50.1328 12.4527 50.1226 11.5214 49.6023 10.9714ZM24.9999 28.5714C22.2382 28.5714 19.9999 31.1295 19.9999 34.2857C19.9999 37.442 22.2382 40 24.9999 40C27.7617 40 30 37.442 30 34.2857C30 31.1295 27.7617 28.5714 24.9999 28.5714ZM40.8335 21.108C31.8289 12.0071 18.1609 12.017 9.16634 21.108C8.62728 21.6527 8.6101 22.5982 9.12181 23.175L11.8124 26.2098C12.2812 26.7384 13.0359 26.7741 13.5351 26.2813C20.0937 19.8018 29.921 19.8161 36.464 26.2813C36.9632 26.7741 37.7179 26.7393 38.1867 26.2098L40.8773 23.175C41.3898 22.5982 41.3718 21.6518 40.8335 21.108Z" fill={'white'} />
        </Svg>}
        {selected==='usb' &&
        <Svg width="26" height="34" viewBox="0 0 26 34" fill="none">
        <Path d="M13.3792 2V24.7586" stroke={'white'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M13.3792 20.2069L21.724 17.1724V11.8621" stroke={'white'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M13.3795 23.2413L5.03467 20.9655V16.4138" stroke={'white'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M13.3793 32.3449C15.4741 32.3449 17.1724 30.6466 17.1724 28.5518C17.1724 26.4569 15.4741 24.7587 13.3793 24.7587C11.2844 24.7587 9.58618 26.4569 9.58618 28.5518C9.58618 30.6466 11.2844 32.3449 13.3793 32.3449Z" stroke={'white'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M19.4482 7.31036V11.8621H24V7.31036H19.4482Z" stroke={'white'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M10.345 5.03448L13.3795 2L16.4139 5.03448" stroke={'white'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M5.03448 15.6552C6.71038 15.6552 8.06897 14.2967 8.06897 12.6207C8.06897 10.9448 6.71038 9.58624 5.03448 9.58624C3.35858 9.58624 2 10.9448 2 12.6207C2 14.2967 3.35858 15.6552 5.03448 15.6552Z" stroke={'white'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>}
        {selected==='server' &&
        <Svg width="53" height="40" viewBox="0 0 53 40" fill="none">
        <Path d='M7.32386 27.7102C7.27841 27.2519 7.08333 26.8958 6.73864 26.642C6.39394 26.3883 5.92614 26.2614 5.33523 26.2614C4.93371 26.2614 4.5947 26.3182 4.31818 26.4318C4.04167 26.5417 3.82955 26.6951 3.68182 26.892C3.53788 27.089 3.46591 27.3125 3.46591 27.5625C3.45833 27.7708 3.50189 27.9527 3.59659 28.108C3.69508 28.2633 3.82955 28.3977 4 28.5114C4.17045 28.6212 4.36742 28.7178 4.59091 28.8011C4.81439 28.8807 5.05303 28.9489 5.30682 29.0057L6.35227 29.2557C6.85985 29.3693 7.32576 29.5208 7.75 29.7102C8.17424 29.8996 8.54167 30.1326 8.85227 30.4091C9.16288 30.6856 9.40341 31.0114 9.57386 31.3864C9.74811 31.7614 9.83712 32.1913 9.84091 32.6761C9.83712 33.3883 9.6553 34.0057 9.29545 34.5284C8.93939 35.0473 8.42424 35.4508 7.75 35.7386C7.07955 36.0227 6.27083 36.1648 5.32386 36.1648C4.38447 36.1648 3.56629 36.0208 2.86932 35.733C2.17614 35.4451 1.63447 35.0189 1.24432 34.4545C0.857955 33.8864 0.655303 33.1837 0.636364 32.3466H3.01705C3.04356 32.7367 3.1553 33.0625 3.35227 33.3239C3.55303 33.5814 3.82008 33.7765 4.15341 33.9091C4.49053 34.0379 4.87121 34.1023 5.29545 34.1023C5.71212 34.1023 6.07386 34.0417 6.38068 33.9205C6.69129 33.7992 6.93182 33.6307 7.10227 33.4148C7.27273 33.1989 7.35795 32.9508 7.35795 32.6705C7.35795 32.4091 7.2803 32.1894 7.125 32.0114C6.97348 31.8333 6.75 31.6818 6.45455 31.5568C6.16288 31.4318 5.80492 31.3182 5.38068 31.2159L4.11364 30.8977C3.13258 30.6591 2.35795 30.286 1.78977 29.7784C1.22159 29.2708 0.939394 28.5871 0.943182 27.7273C0.939394 27.0227 1.12689 26.4072 1.50568 25.8807C1.88826 25.3542 2.41288 24.9432 3.07955 24.6477C3.74621 24.3523 4.50379 24.2045 5.35227 24.2045C6.21591 24.2045 6.9697 24.3523 7.61364 24.6477C8.26136 24.9432 8.76515 25.3542 9.125 25.8807C9.48485 26.4072 9.67045 27.017 9.68182 27.7102H7.32386ZM15.4276 36.1705C14.5298 36.1705 13.7571 35.9886 13.1094 35.625C12.4654 35.2576 11.9692 34.7386 11.6207 34.0682C11.2723 33.3939 11.098 32.5966 11.098 31.6761C11.098 30.7784 11.2723 29.9905 11.6207 29.3125C11.9692 28.6345 12.4598 28.1061 13.0923 27.7273C13.7287 27.3485 14.4749 27.1591 15.331 27.1591C15.9067 27.1591 16.4427 27.2519 16.9389 27.4375C17.4389 27.6193 17.8745 27.8939 18.2457 28.2614C18.6207 28.6288 18.9124 29.0909 19.1207 29.6477C19.3291 30.2008 19.4332 30.8485 19.4332 31.5909V32.2557H12.0639V30.7557H17.1548C17.1548 30.4072 17.0791 30.0985 16.9276 29.8295C16.776 29.5606 16.5658 29.3504 16.2969 29.1989C16.0317 29.0436 15.723 28.9659 15.3707 28.9659C15.0033 28.9659 14.6776 29.0511 14.3935 29.2216C14.1132 29.3883 13.8935 29.6136 13.7344 29.8977C13.5753 30.178 13.4938 30.4905 13.4901 30.8352V32.2614C13.4901 32.6932 13.5696 33.0663 13.7287 33.3807C13.8916 33.6951 14.1207 33.9375 14.4162 34.108C14.7116 34.2784 15.062 34.3636 15.4673 34.3636C15.7363 34.3636 15.9825 34.3258 16.206 34.25C16.4295 34.1742 16.6207 34.0606 16.7798 33.9091C16.9389 33.7576 17.0601 33.572 17.1435 33.3523L19.3821 33.5C19.2685 34.0379 19.0355 34.5076 18.6832 34.9091C18.3348 35.3068 17.884 35.6174 17.331 35.8409C16.7817 36.0606 16.1473 36.1705 15.4276 36.1705ZM21.0128 36V27.2727H23.3594V28.7955H23.4503C23.6094 28.2538 23.8764 27.8447 24.2514 27.5682C24.6264 27.2879 25.0582 27.1477 25.5469 27.1477C25.6681 27.1477 25.7988 27.1553 25.9389 27.1705C26.0791 27.1856 26.2022 27.2064 26.3082 27.233V29.3807C26.1946 29.3466 26.0374 29.3163 25.8366 29.2898C25.6359 29.2633 25.4522 29.25 25.2855 29.25C24.9295 29.25 24.6113 29.3277 24.331 29.483C24.0545 29.6345 23.8348 29.8466 23.6719 30.1193C23.5128 30.392 23.4332 30.7064 23.4332 31.0625V36H21.0128ZM35.9616 27.2727L32.9105 36H30.1832L27.1321 27.2727H29.6889L31.5014 33.517H31.5923L33.3991 27.2727H35.9616ZM40.8963 36.1705C39.9986 36.1705 39.2259 35.9886 38.5781 35.625C37.9342 35.2576 37.438 34.7386 37.0895 34.0682C36.741 33.3939 36.5668 32.5966 36.5668 31.6761C36.5668 30.7784 36.741 29.9905 37.0895 29.3125C37.438 28.6345 37.9285 28.1061 38.5611 27.7273C39.1974 27.3485 39.9437 27.1591 40.7997 27.1591C41.3755 27.1591 41.9115 27.2519 42.4077 27.4375C42.9077 27.6193 43.3433 27.8939 43.7145 28.2614C44.0895 28.6288 44.3812 29.0909 44.5895 29.6477C44.7978 30.2008 44.902 30.8485 44.902 31.5909V32.2557H37.5327V30.7557H42.6236C42.6236 30.4072 42.5478 30.0985 42.3963 29.8295C42.2448 29.5606 42.0346 29.3504 41.7656 29.1989C41.5005 29.0436 41.1918 28.9659 40.8395 28.9659C40.4721 28.9659 40.1463 29.0511 39.8622 29.2216C39.5819 29.3883 39.3622 29.6136 39.2031 29.8977C39.044 30.178 38.9626 30.4905 38.9588 30.8352V32.2614C38.9588 32.6932 39.0384 33.0663 39.1974 33.3807C39.3603 33.6951 39.5895 33.9375 39.8849 34.108C40.1804 34.2784 40.5308 34.3636 40.9361 34.3636C41.205 34.3636 41.4512 34.3258 41.6747 34.25C41.8982 34.1742 42.0895 34.0606 42.2486 33.9091C42.4077 33.7576 42.5289 33.572 42.6122 33.3523L44.8509 33.5C44.7372 34.0379 44.5043 34.5076 44.152 34.9091C43.8035 35.3068 43.3527 35.6174 42.7997 35.8409C42.2505 36.0606 41.616 36.1705 40.8963 36.1705ZM46.4815 36V27.2727H48.8281V28.7955H48.919C49.0781 28.2538 49.3452 27.8447 49.7202 27.5682C50.0952 27.2879 50.527 27.1477 51.0156 27.1477C51.1368 27.1477 51.2675 27.1553 51.4077 27.1705C51.5478 27.1856 51.6709 27.2064 51.777 27.233V29.3807C51.6634 29.3466 51.5062 29.3163 51.3054 29.2898C51.1046 29.2633 50.9209 29.25 50.7543 29.25C50.3982 29.25 50.08 29.3277 49.7997 29.483C49.5232 29.6345 49.3035 29.8466 49.1406 30.1193C48.9815 30.392 48.902 30.7064 48.902 31.0625V36H46.4815Z' fill={'white'}/>
        <Path d="M41.7614 5.76C33.4565 -1.92141 20.5401 -1.91859 12.2386 5.76C11.9264 6.04875 11.9203 6.53766 12.2221 6.83719L13.8271 8.42954C14.115 8.71547 14.5781 8.72157 14.8771 8.44735C21.7172 2.1811 32.2818 2.17969 39.1233 8.44735C39.4223 8.72157 39.8854 8.715 40.1733 8.42954L41.7783 6.83719C42.0797 6.53766 42.0736 6.04875 41.7614 5.76ZM27 15C25.3429 15 24 16.343 24 18C24 19.657 25.3429 21 27 21C28.657 21 30 19.657 30 18C30 16.343 28.657 15 27 15ZM36.5001 11.0817C31.0973 6.30375 22.8965 6.30891 17.4998 11.0817C17.1764 11.3677 17.1661 11.8641 17.4731 12.1669L19.0875 13.7602C19.3687 14.0377 19.8215 14.0564 20.1211 13.7977C24.0562 10.3959 29.9526 10.4034 33.8784 13.7977C34.1779 14.0564 34.6308 14.0381 34.912 13.7602L36.5264 12.1669C36.8339 11.8641 36.8231 11.3672 36.5001 11.0817Z" fill={'white'} />
        </Svg>
        }
        </>
    )
}
const Reload = ({selectedColor}:{selectedColor:string})=>{
    return (
    <Svg fill={'none'} viewBox='0 0 24 24' strokeWidth={'2.5'} stroke={selectedColor}>
        <Path strokeLinecap='round' strokeLinejoin='round' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'/>
    </Svg>
    )
}
const Flash = ({selectedColor}:{selectedColor:string})=>{
    return (
    <Svg width={40} viewBox='0 0 40 40' height={40} fill={'none'}>
        <Path d='M14.5127 37.4001C14.2569 37.2921 14.0443 37.102 13.9085 36.8598C13.7727 36.6177 13.7214 36.3372 13.7627 36.0626L16.0377 21.2501H10.0002C9.80877 21.2552 9.61873 21.2163 9.44474 21.1364C9.27075 21.0565 9.11744 20.9376 8.99665 20.7891C8.87586 20.6405 8.79082 20.4662 8.74808 20.2795C8.70535 20.0929 8.70606 19.8989 8.75017 19.7126L12.5002 3.46258C12.5662 3.18292 12.7265 2.93453 12.9541 2.75922C13.1818 2.58392 13.4629 2.4924 13.7502 2.50008H26.2502C26.4369 2.49945 26.6214 2.54066 26.7902 2.6207C26.9589 2.70073 27.1075 2.81755 27.2252 2.96258C27.3445 3.10924 27.429 3.28106 27.4723 3.4651C27.5156 3.64914 27.5166 3.8406 27.4752 4.02508L25.3127 13.7501H31.2502C31.4844 13.7496 31.7141 13.815 31.9131 13.9388C32.112 14.0625 32.2721 14.2397 32.3752 14.4501C32.4647 14.652 32.4992 14.8741 32.4751 15.0936C32.4509 15.3132 32.369 15.5225 32.2377 15.7001L15.9877 36.9501C15.8778 37.1129 15.7312 37.2475 15.5596 37.3431C15.3881 37.4386 15.1964 37.4924 15.0002 37.5001C14.8329 37.497 14.6677 37.4631 14.5127 37.4001ZM22.1877 16.2501L24.6877 5.00008H14.7502L11.5752 18.7501H18.9627L16.9752 31.6001L28.7502 16.2501H22.1877Z' fill={selectedColor}/>
    </Svg>
    )
}
const AutoFocus = ({selectedColor}:{selectedColor:string})=>{
    return (
    <Svg width={40} viewBox='0 0 40 40' height={40} fill={'none'}>
        <Mask id='mask0_37_22' style={{maskType:'luminance'}} maskUnits='userSpaceOnUse' x={'0'} y={'0'} width={40} height={40}>
            <Path d='M1.5 1.5H38.5V38.5H1.5V1.5Z' fill={selectedColor} stroke={selectedColor} strokeWidth={3}/>
        </Mask>
        <G mask='url(#mask0_37_22)'>
            <Path d='M19.9995 22.8574C23.9444 22.8574 27.1424 19.6594 27.1424 15.7145C27.1424 11.7696 23.9444 8.57166 19.9995 8.57166C16.0547 8.57166 12.8567 11.7696 12.8567 15.7145C12.8567 19.6594 16.0547 22.8574 19.9995 22.8574Z' stroke={selectedColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d='M29.456 30.7145C26.8454 28.4087 23.4821 27.1361 19.9989 27.1361C16.5157 27.1361 13.1525 28.4087 10.5417 30.7145' stroke={selectedColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M38.5714 30V35.7143C38.5714 36.472 38.2703 37.1989 37.7346 37.7346C37.1989 38.2703 36.472 38.5714 35.7143 38.5714H30" stroke={selectedColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M30 1.42834H35.7143C36.472 1.42834 37.1989 1.72936 37.7346 2.26518C38.2703 2.801 38.5714 3.52772 38.5714 4.28549V9.99977" stroke={selectedColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M1.42896 9.99977V4.28549C1.42896 3.52772 1.72998 2.801 2.26579 2.26518C2.80161 1.72936 3.52833 1.42834 4.2861 1.42834H10.0004" stroke={selectedColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M10.0004 38.5714H4.2861C3.52833 38.5714 2.80161 38.2703 2.26579 37.7346C1.72998 37.1989 1.42896 36.472 1.42896 35.7143V30" stroke={selectedColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </G>
    </Svg>
    )
}
const Capture = ({selectedColor}:{selectedColor:string})=>{
    return (
        <Svg width={45} viewBox='0 0 45 38' height={38} fill={'none'}>
        <Path d='M22.5 15C19.2 15 16.5 17.7 16.5 21C16.5 24.3 19.2 27 22.5 27C25.8 27 28.5 24.3 28.5 21C28.5 17.7 25.8 15 22.5 15Z' fill={selectedColor}/>
        <Path d='M40.5 7.5H34.425C33.8242 7.5 33.3 7.2 33.0742 6.6L31.1243 2.475C30.3743 0.974999 28.7992 0 27.0742 0H17.925C16.2 0 14.625 0.974999 13.875 2.475L11.925 6.6C11.7 7.125 11.175 7.5 10.575 7.5H4.5C2.025 7.5 0 9.525 0 12V33C0 35.475 2.025 37.5 4.5 37.5H40.5C42.975 37.5 45 35.475 45 33V12C45 9.525 42.975 7.5 40.5 7.5ZM22.5 31.65C16.725 31.65 12 26.925 12 21.15C12 15.375 16.725 10.65 22.5 10.65C28.275 10.65 33 15.375 33 21.15C33 26.925 28.275 31.65 22.5 31.65Z' fill={selectedColor}/>
        </Svg>
    )
}
const Settings = ({selectedColor}:{selectedColor:string})=>{
    return (
    <Svg width={45} viewBox='0 0 45 45' height={45} fill={'none'}>
        <Path d='M24.2625 41.25H20.7187C19.8833 41.25 19.0821 40.9181 18.4914 40.3274C17.9006 39.7366 17.5687 38.9354 17.5687 38.1V36.0562C17.5586 35.9358 17.5144 35.8208 17.4414 35.7245C17.3684 35.6282 17.2695 35.5547 17.1562 35.5125C17.0415 35.439 16.9081 35.3999 16.7719 35.3999C16.6356 35.3999 16.5022 35.439 16.3875 35.5125L15 37.0125C14.709 37.3056 14.3628 37.5382 13.9815 37.6969C13.6001 37.8557 13.1912 37.9374 12.7781 37.9374C12.3651 37.9374 11.9561 37.8557 11.5748 37.6969C11.1934 37.5382 10.8473 37.3056 10.5562 37.0125L7.9875 34.5C7.69016 34.2095 7.45401 33.8624 7.293 33.4792C7.13198 33.096 7.04936 32.6844 7.05 32.2687C7.0512 31.4185 7.38814 30.6031 7.9875 30L9.375 28.6125C9.44198 28.5092 9.47763 28.3887 9.47763 28.2656C9.47763 28.1425 9.44198 28.022 9.375 27.9187C9.2625 27.6375 9.075 27.4312 8.8125 27.4312H6.9C6.06285 27.4263 5.26167 27.0903 4.67147 26.4965C4.08126 25.9028 3.74999 25.0997 3.75 24.2625V20.7187C3.75 19.8833 4.08187 19.0821 4.67261 18.4914C5.26335 17.9006 6.06457 17.5687 6.9 17.5687H8.94375C9.06416 17.5586 9.1792 17.5144 9.27548 17.4414C9.37175 17.3684 9.44528 17.2695 9.4875 17.1562C9.561 17.0415 9.60007 16.9081 9.60007 16.7719C9.60007 16.6356 9.561 16.5022 9.4875 16.3875L7.9875 15C7.69441 14.709 7.4618 14.3628 7.30306 13.9815C7.14432 13.6001 7.0626 13.1912 7.0626 12.7781C7.0626 12.3651 7.14432 11.9561 7.30306 11.5748C7.4618 11.1934 7.69441 10.8473 7.9875 10.5562L10.5 7.9875C10.7876 7.69157 11.1315 7.45617 11.5115 7.29517C11.8915 7.13416 12.2998 7.0508 12.7125 7.05C13.1367 7.04814 13.5571 7.12999 13.9496 7.29086C14.3422 7.45173 14.6991 7.68847 15 7.9875L16.3875 9.375C16.4908 9.44198 16.6113 9.47763 16.7344 9.47763C16.8575 9.47763 16.978 9.44198 17.0812 9.375C17.3625 9.2625 17.5687 9.075 17.5687 8.8125V6.9C17.5737 6.06285 17.9097 5.26167 18.5035 4.67147C19.0972 4.08126 19.9003 3.74999 20.7375 3.75H24.375C25.2104 3.75 26.0116 4.08187 26.6024 4.67261C27.1931 5.26335 27.525 6.06457 27.525 6.9V8.94375C27.5352 9.06416 27.5793 9.1792 27.6524 9.27548C27.7254 9.37175 27.8243 9.44528 27.9375 9.4875C28.0522 9.561 28.1856 9.60007 28.3219 9.60007C28.4581 9.60007 28.5915 9.561 28.7062 9.4875L30 7.9875C30.291 7.69441 30.6372 7.4618 31.0185 7.30306C31.3999 7.14432 31.8088 7.0626 32.2219 7.0626C32.6349 7.0626 33.0439 7.14432 33.4252 7.30306C33.8065 7.4618 34.1527 7.69441 34.4437 7.9875L37.0125 10.5C37.309 10.7911 37.5446 11.1383 37.7055 11.5214C37.8665 11.9045 37.9496 12.3157 37.95 12.7312C37.959 13.1537 37.8804 13.5734 37.719 13.9639C37.5577 14.3544 37.3171 14.7072 37.0125 15L35.625 16.3875C35.558 16.4908 35.5224 16.6113 35.5224 16.7344C35.5224 16.8575 35.558 16.978 35.625 17.0812C35.7375 17.3625 35.925 17.5687 36.1875 17.5687H38.2312C39.0454 17.6073 39.8133 17.9581 40.3755 18.5483C40.9377 19.1384 41.2509 19.9224 41.25 20.7375V24.375C41.25 25.2104 40.9181 26.0116 40.3274 26.6024C39.7366 27.1931 38.9354 27.525 38.1 27.525H36.0562C35.9358 27.5352 35.8208 27.5793 35.7245 27.6524C35.6282 27.7254 35.5547 27.8243 35.5125 27.9375C35.4455 28.0408 35.4099 28.1613 35.4099 28.2844C35.4099 28.4075 35.4455 28.528 35.5125 28.6312L36.9562 30.075C37.2493 30.366 37.4819 30.7122 37.6407 31.0935C37.7994 31.4749 37.8811 31.8838 37.8811 32.2969C37.8811 32.7099 37.7994 33.1189 37.6407 33.5002C37.4819 33.8815 37.2493 34.2277 36.9562 34.5187L34.5 37.0125C34.2124 37.3084 33.8685 37.5438 33.4885 37.7048C33.1085 37.8658 32.7002 37.9492 32.2875 37.95C31.4502 37.939 30.6501 37.6028 30.0562 37.0125L28.6125 35.625C28.5092 35.558 28.3887 35.5224 28.2656 35.5224C28.1425 35.5224 28.022 35.558 27.9187 35.625C27.6375 35.7375 27.4312 35.925 27.4312 36.1875V38.2312C27.3927 39.0454 27.0419 39.8133 26.4517 40.3755C25.8616 40.9377 25.0775 41.2509 24.2625 41.25ZM21.3187 37.5H23.6812V36.0562C23.6892 35.1916 23.9536 34.3488 24.4409 33.6345C24.9283 32.9202 25.6166 32.3666 26.4187 32.0437C27.2242 31.6917 28.1162 31.5875 28.9811 31.7444C29.8461 31.9014 30.6446 32.3124 31.275 32.925L32.2875 33.9375L33.9375 32.2875L32.925 31.2562C32.3162 30.6354 31.9057 29.8477 31.7454 28.993C31.5852 28.1384 31.6825 27.2555 32.025 26.4562C32.3507 25.6576 32.9056 24.9732 33.6196 24.4894C34.3337 24.0056 35.175 23.744 36.0375 23.7375H37.5V21.3187H36.0562C35.1916 21.3108 34.3488 21.0464 33.6345 20.559C32.9202 20.0717 32.3666 19.3834 32.0437 18.5812C31.6917 17.7758 31.5875 16.8837 31.7444 16.0188C31.9014 15.1539 32.3124 14.3554 32.925 13.725L33.9375 12.7125L32.2875 11.0625L31.2562 12.075C30.6257 12.6509 29.8438 13.0347 29.0025 13.1812C28.1612 13.3276 27.2955 13.2306 26.5075 12.9016C25.7194 12.5726 25.0418 12.0253 24.5544 11.3241C24.067 10.6229 23.7901 9.79704 23.7562 8.94375V7.5H21.3187V8.94375C21.3108 9.8084 21.0464 10.6512 20.559 11.3655C20.0717 12.0798 19.3834 12.6334 18.5812 12.9562C17.7758 13.3083 16.8837 13.4125 16.0188 13.2556C15.1539 13.0986 14.3554 12.6876 13.725 12.075L12.7125 11.0625L11.0625 12.7125L12.075 13.7437C12.6509 14.3743 13.0347 15.1562 13.1812 15.9975C13.3276 16.8388 13.2306 17.7045 12.9016 18.4925C12.5726 19.2805 12.0253 19.9582 11.3241 20.4456C10.6229 20.933 9.79704 21.2099 8.94375 21.2437H7.5V23.6062H8.94375C9.8084 23.6142 10.6512 23.8786 11.3655 24.3659C12.0798 24.8533 12.6334 25.5416 12.9562 26.3437C13.3083 27.1492 13.4125 28.0412 13.2556 28.9061C13.0986 29.7711 12.6876 30.5696 12.075 31.2L11.0625 32.2125L12.7125 33.8625L13.7437 32.85C14.3743 32.2741 15.1562 31.8903 15.9975 31.7438C16.8388 31.5974 17.7045 31.6944 18.4925 32.0234C19.2805 32.3524 19.9582 32.8997 20.4456 33.6009C20.933 34.3021 21.2099 35.128 21.2437 35.9812L21.3187 37.5Z' fill={selectedColor}/>
        <Path d='M22.5002 29.0625C21.2023 29.0625 19.9335 28.6776 18.8543 27.9565C17.7751 27.2354 16.934 26.2105 16.4373 25.0114C15.9406 23.8122 15.8106 22.4927 16.0638 21.2197C16.3171 19.9467 16.9421 18.7774 17.8599 17.8596C18.7776 16.9418 19.947 16.3168 21.22 16.0636C22.493 15.8104 23.8125 15.9403 25.0116 16.437C26.2107 16.9337 27.2357 17.7749 27.9568 18.8541C28.6779 19.9333 29.0627 21.2021 29.0627 22.5C29.0627 24.2405 28.3713 25.9097 27.1406 27.1404C25.9099 28.3711 24.2407 29.0625 22.5002 29.0625ZM22.5002 19.6875C21.944 19.6875 21.4002 19.8525 20.9377 20.1615C20.4752 20.4705 20.1147 20.9098 19.9018 21.4237C19.689 21.9376 19.6333 22.5031 19.7418 23.0487C19.8503 23.5943 20.1182 24.0954 20.5115 24.4887C20.9048 24.8821 21.406 25.1499 21.9516 25.2585C22.4971 25.367 23.0626 25.3113 23.5765 25.0984C24.0905 24.8855 24.5297 24.5251 24.8388 24.0625C25.1478 23.6 25.3127 23.0563 25.3127 22.5C25.3127 21.7541 25.0164 21.0387 24.489 20.5113C23.9615 19.9838 23.2462 19.6875 22.5002 19.6875Z' fill={selectedColor}/>
    </Svg>
    )
}
const StatusDots = ({selectedStatus}:{selectedStatus:string})=>{
    return(
        <View style={{justifyContent:'center',height:'100%',top:4}}>
        {selectedStatus==='green' && 
        <View style={{backgroundColor:"#95BF44",height:20,width:20,borderRadius:100}}></View>
        }
        {selectedStatus==='yellow' && 
        <View style={{backgroundColor:"#FFC300",height:20,width:20,borderRadius:100}}></View>
        }
        {selectedStatus==='red' && 
        <View style={{backgroundColor:"#FF474C",height:20,width:20,borderRadius:100}}></View>
        }
        </View>
    )
}
const HD = ({selectedColor,backgroundColor}:{selectedColor:string,backgroundColor:string})=>{
    return(
    <Svg width={61} viewBox='0 0 41 23' height={43} fill={'none'}>
        <Rect x={0.5} y={0.5} strokeWidth={2} width={40} height={22} rx={11} fill={backgroundColor} stroke={selectedColor}/>
        <Path d='M9.88281 16C9.6224 16 9.52604 15.8568 9.59375 15.5703L11.9766 5.22656C12.0443 4.9401 12.2083 4.79688 12.4688 4.79688H13.1875C13.4479 4.79688 13.5443 4.9401 13.4766 5.22656L12.4844 9.53125H17.9375L18.9297 5.22656C18.9974 4.9401 19.1615 4.79688 19.4219 4.79688H20.1406C20.401 4.79688 20.4974 4.9401 20.4297 5.22656L18.0469 15.5703C17.9792 15.8568 17.8151 16 17.5547 16H16.8359C16.5755 16 16.4792 15.8568 16.5469 15.5703L17.6406 10.8125H12.1875L11.0938 15.5703C11.026 15.8568 10.862 16 10.6016 16H9.88281ZM20.9922 16C20.7318 16 20.6354 15.8568 20.7031 15.5703L23.0859 5.22656C23.1536 4.9401 23.3177 4.79688 23.5781 4.79688H26.0703C27.9349 4.79688 29.2266 5.2526 29.9453 6.16406C30.6641 7.07552 31.0234 8.14583 31.0234 9.375C31.0234 11.1458 30.4766 12.6927 29.3828 14.0156C28.2891 15.3385 26.5833 16 24.2656 16H20.9922ZM22.3984 14.7188H24.4922C26.2214 14.7188 27.474 14.1667 28.25 13.0625C29.0312 11.9583 29.4219 10.6979 29.4219 9.28125C29.4219 8.38542 29.2083 7.625 28.7812 7C28.3594 6.375 27.3359 6.0625 25.7109 6.0625H24.3984L22.3984 14.7188Z' fill={selectedColor}/>
    </Svg>
    )
}
export {Tick,WiFi,Server,USB,SelectedBtn,Reload,Flash,AutoFocus,Settings,Capture,StatusDots,HD};