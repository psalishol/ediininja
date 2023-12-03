import {View} from 'react-native';
import {
  AlmonCutSvg,
  AlmonSvg,
  AppleCutSvg,
  AppleSvg,
  AvocadoCutSvg,
  AvocadoSvg,
  BaconCutSvg,
  BaconSvg,
  BananaCutSvg,
  BananaSvg,
  BeefCutSvg,
  BeefSvg,
  BlackBeanCutSvg,
  BlackBeanSvg,
  BlueberriesCutSvg,
  BlueberriesSvg,
  BroccoliCutSvg,
  BroccoliSvg,
  ButternutSquachCutSvg,
  ButternutSquachSvg,
  CarrotCutSvg,
  CarrotSvg,
  CauliflowerCutSvg,
  CauliflowerSvg,
  CheeseCutSvg,
  CheeseSvg,
  CherryCutSvg,
  CherrySvg,
  ChickenCutSvg,
  ChickenSvg,
  ChickpeaSvg,
  ChickpeasCutSvg,
  CottageCheeseCutSvg,
  CottageCheeseSvg,
  CucumberCutSvg,
  CucumberSvg,
  EggCutSvg,
  EggSvg,
  FrenchFriesCutSvg,
  FrenchFriesSvg,
  GrapeFruitCutSvg,
  GrapeFruitSvg,
  GrapesCutSvg,
  GrapesSvg,
  GreekYoghurtCutSvg,
  GreekYoghurtSvg,
  HamburgerCutSvg,
  HamburgerSvg,
  IceCreamCutSvg,
  IceCreamSvg,
  KidneyBeansCutSvg,
  KidneyBeansSvg,
  KiwiCutSvg,
  KiwiSvg,
  LentilCutSvg,
  LentilSvg,
  MilkCutSvg,
  MilkSvg,
  OrangeCutSvg,
  OrangeSvg,
  PastaCutSvg,
  PastaSvg,
  PeachCutSvg,
  PeachSvg,
  PearCutSvg,
  PearSvg,
  PineappleCutSvg,
  PineappleSvg,
  PizzaCutSvg,
  PizzaSvg,
  PlumCutSvg,
  PlumSvg,
  RiceCakeCutSvg,
  RiceCakeSvg,
  SalmonCutSvg,
  SalmonSvg,
  SandwichCutSvg,
  SandwichSvg,
  SpinachCutSvg,
  SpinachSvg,
  StrawberriesCutSvg,
  StrawberriesSvg,
  SweetPotatoCutSvg,
  SweetPotatoSvg,
  TofuCutSvg,
  TofuSvg,
  WalnutsCutSvg,
  WalnutsSvg,
  WatermelonCutSvg,
  WatermelonSvg,
  ZucchiniCutSvg,
  ZucchiniSvg,
} from '../assets/svg';
import {size as iSize} from '../helper';
import {FoodItems} from '../types';

export const renderFood = (
  food: FoodItems,
  cut?: boolean,
  size = iSize(50),
): JSX.Element => {
  switch (food) {
    case 'Apple':
      if (cut) {
        return <AppleCutSvg height={size} width={size} />;
      }
      return <AppleSvg height={size} width={size} />;

    case 'Banana':
      if (cut) {
        return <BananaCutSvg height={size} width={size} />;
      }
      return <BananaSvg height={size} width={size} />;

    case 'Brocolli':
      if (cut) {
        return <BroccoliCutSvg height={size} width={size} />;
      }
      return <BroccoliSvg height={size} width={size} />;

    case 'Pizza':
      if (cut) {
        return <PizzaCutSvg height={size} width={size} />;
      }
      return <PizzaSvg height={size} width={size} />;

    case 'Carrot':
      if (cut) {
        return <CarrotCutSvg height={size} width={size} />;
      }
      return <CarrotSvg height={size} width={size} />;

    case 'Grapes':
      if (cut) {
        return <GrapesCutSvg height={size} width={size} />;
      }
      return <GrapesSvg height={size} width={size} />;

    case 'French Fries':
      if (cut) {
        return <FrenchFriesCutSvg height={size} width={size} />;
      }
      return <FrenchFriesSvg height={size} width={size} />;

    case 'Spinach':
      if (cut) {
        return <SpinachCutSvg height={size} width={size} />;
      }
      return <SpinachSvg height={size} width={size} />;

    case 'Hamburger':
      if (cut) {
        return <HamburgerCutSvg height={size} width={size} />;
      }
      return <HamburgerSvg height={size} width={size} />;

    case 'Ice Cream':
      if (cut) {
        return <IceCreamCutSvg height={size} width={size} />;
      }
      return <IceCreamSvg height={size} width={size} />;

    case 'Chicken Breast':
      if (cut) {
        return <ChickenCutSvg height={size} width={size} />;
      }
      return <ChickenSvg height={size} width={size} />;

    case 'Sandwich':
      if (cut) {
        return <SandwichCutSvg height={size} width={size} />;
      }
      return <SandwichSvg height={size} width={size} />;

    case 'Watermelon':
      if (cut) {
        return <WatermelonCutSvg height={size} width={size} />;
      }
      return <WatermelonSvg height={size} width={size} />;

    case 'Egg':
      if (cut) {
        return <EggCutSvg height={size} width={size} />;
      }
      return <EggSvg height={size} width={size} />;

    case 'Orange':
      if (cut) {
        return <OrangeCutSvg height={size} width={size} />;
      }
      return <OrangeSvg height={size} width={size} />;

    case 'Blueberries':
      if (cut) {
        return <BlueberriesCutSvg height={size} width={size} />;
      }
      return <BlueberriesSvg height={size} width={size} />;

    case 'Strawberries':
      if (cut) {
        return <StrawberriesCutSvg height={size} width={size} />;
      }
      return <StrawberriesSvg height={size} width={size} />;

    case 'Kiwi':
      if (cut) {
        return <KiwiCutSvg height={size} width={size} />;
      }
      return <KiwiSvg height={size} width={size} />;

    case 'Pineapple':
      if (cut) {
        return <PineappleCutSvg height={size} width={size} />;
      }
      return <PineappleSvg height={size} width={size} />;

    case 'Grapefruit':
      if (cut) {
        return <GrapeFruitCutSvg height={size} width={size} />;
      }
      return <GrapeFruitSvg height={size} width={size} />;

    case 'Cherry':
      if (cut) {
        return <CherryCutSvg height={size} width={size} />;
      }
      return <CherrySvg height={size} width={size} />;

    case 'Pear':
      if (cut) {
        return <PearCutSvg height={size} width={size} />;
      }
      return <PearSvg height={size} width={size} />;

    case 'Peach':
      if (cut) {
        return <PeachCutSvg height={size} width={size} />;
      }
      return <PeachSvg height={size} width={size} />;

    case 'Plum':
      if (cut) {
        return <PlumCutSvg height={size} width={size} />;
      }
      return <PlumSvg height={size} width={size} />;

    case 'Avocado':
      if (cut) {
        return <AvocadoCutSvg height={size} width={size} />;
      }
      return <AvocadoSvg height={size} width={size} />;

    case 'Cucumber':
      if (cut) {
        return <CucumberCutSvg height={size} width={size} />;
      }
      return <CucumberSvg height={size} width={size} />;

    case 'Cauliflower':
      if (cut) {
        return <CauliflowerCutSvg height={size} width={size} />;
      }
      return <CauliflowerSvg height={size} width={size} />;

    case 'Zucchini':
      if (cut) {
        return <ZucchiniCutSvg height={size} width={size} />;
      }
      return <ZucchiniSvg height={size} width={size} />;

    case 'Sweet potato':
      if (cut) {
        return <SweetPotatoCutSvg height={size} width={size} />;
      }
      return <SweetPotatoSvg height={size} width={size} />;

    case 'Butternut':
      if (cut) {
        return <ButternutSquachCutSvg height={size} width={size} />;
      }
      return <ButternutSquachSvg height={size} width={size} />;

    case 'Salmon':
      if (cut) {
        return <SalmonCutSvg height={size} width={size} />;
      }
      return <SalmonSvg height={size} width={size} />;

    case 'Tofu':
      if (cut) {
        return <TofuCutSvg height={size} width={size} />;
      }
      return <TofuSvg height={size} width={size} />;

    case 'Greek Yoghurt':
      if (cut) {
        return <GreekYoghurtCutSvg height={size} width={size} />;
      }
      return <GreekYoghurtSvg height={size} width={size} />;

    case 'Cottage Cheese':
      if (cut) {
        return <CottageCheeseCutSvg height={size} width={size} />;
      }
      return <CottageCheeseSvg height={size} width={size} />;

    case 'Almonds':
      if (cut) {
        return <AlmonCutSvg height={size} width={size} />;
      }
      return <AlmonSvg height={size} width={size} />;

    case 'Walnuts':
      if (cut) {
        return <WalnutsCutSvg height={size} width={size} />;
      }
      return <WalnutsSvg height={size} width={size} />;

    case 'Pasta':
      if (cut) {
        return <PastaCutSvg height={size} width={size} />;
      }
      return <PastaSvg height={size} width={size} />;

    case 'Rice Cake':
      if (cut) {
        return <RiceCakeCutSvg height={size} width={size} />;
      }
      return <RiceCakeSvg height={size} width={size} />;

    case 'Black Beans':
      if (cut) {
        return <BlackBeanCutSvg height={size} width={size} />;
      }
      return <BlackBeanSvg height={size} width={size} />;

    case 'ChickPeas':
      if (cut) {
        return <ChickpeasCutSvg height={size} width={size} />;
      }
      return <ChickpeaSvg height={size} width={size} />;

    case 'Lentils':
      if (cut) {
        return <LentilCutSvg height={size} width={size} />;
      }
      return <LentilSvg height={size} width={size} />;

    case 'Kidney Beans':
      if (cut) {
        return <KidneyBeansCutSvg height={size} width={size} />;
      }
      return <KidneyBeansSvg height={size} width={size} />;

    case 'Milk':
      if (cut) {
        return <MilkCutSvg height={size} width={size} />;
      }
      return <MilkSvg height={size} width={size} />;

    case 'Cheese':
      if (cut) {
        return <CheeseCutSvg height={size} width={size} />;
      }
      return <CheeseSvg height={size} width={size} />;

    case 'Bacon':
      if (cut) {
        return <BaconCutSvg height={size} width={size} />;
      }
      return <BaconSvg height={size} width={size} />;

    case 'Beef':
      if (cut) {
        return <BeefCutSvg height={size} width={size} />;
      }
      return <BeefSvg height={size} width={size} />;

    default:
      return <View />;
  }
};
