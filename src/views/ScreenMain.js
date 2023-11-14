import { View, Text, Image, TextInput, Pressable } from "react-native";
import { createStore } from "redux";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote } from "../redux/actions";
import { TouchableOpacity } from "react-native-web";

const ScreenMain = () => {
  const [newNote, setNewNote] = useState("");
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const handleAddNote = () => {
    dispatch(addNote({ id: Date.now(), text: newNote }));
    setNewNote("");
  };

  const handleDeleteNote = (noteId) => {
    dispatch(deleteNote(noteId));
    console.log(`Delete ${noteId}`);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: 335, padding: 16 }}>
        <TextInput
          placeholder="Enter your note"
          value={newNote}
          onChangeText={(text) => setNewNote(text)}
          style={{ marginBottom: 20 }}
        />
        <Pressable
          onPress={handleAddNote}
          style={{
            width: 335,
            height: 48,
            borderRadius: 24,
            backgroundColor: "yellow",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Add Note</Text>
        </Pressable>
        {notes.map((note) => (
          <View
            key={note.id}
            style={{ width: 335, height: 48, borderRadius:24 , backgroundColor: 'rgba(222, 225, 230, 0.47)',flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginVertical: 10 }}
          >
            <TouchableOpacity>
              <Image
                source={require("../images/Frame (2).png")}
                style={{ width: 24, height: 24, resizeMode: "contain" }}
              />
            </TouchableOpacity>
            <Text>{note.text}</Text>
            <TouchableOpacity onPress={() => handleDeleteNote(note.id)}>
              <Image
                source={require("../images/Frame (3).png")}
                style={{ width: 24, height: 24, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ScreenMain;
