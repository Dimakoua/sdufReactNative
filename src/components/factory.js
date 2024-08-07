import { createElement, memo, useCallback } from 'react'
import Hr from './widgets/hr'
import Row from './layouts/row'
import Wrap from './layouts/wrap'
import Error from './widgets/error'
import Column from './layouts/column'
import ApiWidget from './widgets/api'
import Header from './widgets/header'
import Center from './layouts/center'
import Label1 from './widgets/label1'
import Label2 from './widgets/label2'
import Label3 from './widgets/label3'
import ItemList from './widgets/list'
import Footer from './widgets/footer'
import TextWidget from './widgets/text'
import ImageWidget from './widgets/image'
import MapWidget from './widgets/mapLibre'
import ItemCard1 from './widgets/itemCard1'
import ItemCard2 from './widgets/itemCard2'
import CameraWidget from './widgets/camera'
import MyCarousel from './widgets/carousel'
import FormWidget from './widgets/form/form'
import WebViewWidget from './widgets/webView'
import InputWidget from './widgets/form/input'
import ItemHeader2 from './widgets/itemHeader2'
import chatPreview from './widgets/chatPreview'
import ChatMessage from './widgets/chatMessage'
import WormholeWidget from './widgets/wormhole'
import TinderWidget from './widgets/tinderCard'
import SelectWidget from './widgets/form/select'
import SwipeableLayout from './layouts/swipable'
import ButtonWidget from './widgets/form/button'
import PaginationWidget from './widgets/pagination'
import TextAreaWidget from './widgets/form/textarea'
import ImageLibraryWidget from './widgets/imageLibrary'
import DateTimePickerWidget from './widgets/datepicker'
import InputWithButton from './widgets/form/inputWithBtn'

const keysToComponentMap = {
    // layouts
    Column: Column,
    TwoColumn: Column,
    Row: Row,
    SimpleRow: Row,
    LineWidget: Hr,
    // widgets
    ChatPreviewWidget: chatPreview,
    Item2Header: ItemHeader2,
    HeaderWidget: Header,
    FooterWidget: Footer,
    ImageWidget: ImageWidget,
    TextWidget: TextWidget,
    ItemCard1: ItemCard1,
    ItemCard2: ItemCard2,
    Label1Widget: Label1,
    Label2Widget: Label2,
    Label3Widget: Label3,
    ImageCarouselWidget: MyCarousel,
    InputWidget: InputWidget,
    TextAreaWidget: TextAreaWidget,
    SelectWidget: SelectWidget,
    ButtonWidget: ButtonWidget,
    FormWidget: FormWidget,
    MaplibreWidget: MapWidget,
    ApiWidget: ApiWidget,
    ChatMessageWidget: ChatMessage,
    WebViewWidget: WebViewWidget,
    ListWidget: ItemList,
    SimpleWrap: Wrap,
    PaginationWidget: PaginationWidget,
    FixedCenter: Center,
    TinderWidget: TinderWidget,
    SwipeableLayout: SwipeableLayout,
    InputWithButtonWidget: InputWithButton,
    DateTimePickerWidget: DateTimePickerWidget,
    CustomWidget: WormholeWidget,
    CameraWidget: CameraWidget,
    ImageLibraryWidget: ImageLibraryWidget
}


function ComponentFactory(config) {
    const getComponentName = useCallback((key) => {
        return keysToComponentMap[key] ? keysToComponentMap[key] : Error
    }, [config.props.name])

    return createElement(
        getComponentName(config.props.name),
        {
            factory: ComponentFactory,
            data: config.props.data,
            id: config.props.id,
            nestedComponents: config.props.nestedComponents ? config.props.nestedComponents : null
        }
    );
}


export default memo(ComponentFactory);
