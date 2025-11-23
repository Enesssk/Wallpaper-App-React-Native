import React, {useState, useRef, } from "react"
import { Pressable, TextInput, TouchableOpacity, View } from 'react-native';
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/scaling';
import style from "./style"
import { searchImages } from '../../api/service/apiService';
import Images from '../Images/Images';

const Search = props => {
  const [search, setSearch] = useState("")
  const textInputRef = useRef(null);

  const handleFocus = () => {
    textInputRef.current.focus()
  }

  const handleSearch = (val) => {
    props.setSearchValue(val)
    //search..
    if(val.length > 2) {
      searchImages(val).then(images => {
        props.onSearchResults(images)
      })
    } else {
      props.onSearchResults("")
    }
  }

  return (
    <View style={style.searchContainer}>
      <Pressable
        onPress={handleFocus}
        style={style.container}>
        <FontAwesomeIcon icon={faSearch} size={scaleFontSize(28)} color={"black"}/>
        <TextInput
          style={style.textInput}
          placeholder={props.placeholder}
          ref={textInputRef}
          value={props.searchValue}
          onChangeText={(val) => {
            props.setSearchValue(val)
            handleSearch(val)
          }}
        />
      </Pressable>
      {/*CloseSearchButton*/}
      {
        search && <TouchableOpacity
          onPress={() => setSearch("")}
          style={style.closeButtonContainer}>
          <FontAwesomeIcon icon={faClose} size={scaleFontSize(28)} color={"black"}/>
        </TouchableOpacity>
      }
    </View>
  )
}

Search.defaultProps = {
  placeholder: "Search..."
}

Search.propTypes = {
  placeholder: PropTypes.string,
  onSearchResults: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
}

export default Search;