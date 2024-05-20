import React, { useState } from "react";
import Sidebar from "./Sidebar";
import RoomTable from "./RommTable";
<<<<<<< HEAD
import { IoCloseSharp, IoMenu } from "react-icons/io5";
=======
import { IoMenu,  IoCloseOutline} from "react-icons/io5";

>>>>>>> 355d77ebaff37ef3575df58abd74d7f66bdd3038

const initialRooms = [
  {
    roomNumber: "101",
    capacity: 4,
    occupancy: 2,
    status: "Available",
    location: "Lakeside Manor, Riverside",
  },
  {
    roomNumber: "102",
    capacity: 3,
    occupancy: 3,
    status: "Occupied",
    location: "Hillview Hostel, Springfield",
  },
  {
    roomNumber: "103",
    capacity: 4,
    occupancy: 3,
    status: "Available",
    location: "Maplewood Lodge, Greenfield",
  },
];

const Room = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rooms, setRooms] = useState(initialRooms);
  const [filteredData, setFilteredData] = useState(initialRooms);
<<<<<<< HEAD
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

=======
  const [isSidebarToggle, setIsSidebarToggle] = useState(false)
>>>>>>> 355d77ebaff37ef3575df58abd74d7f66bdd3038

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = rooms.filter(
      (room) =>
        room.roomNumber.toLowerCase().includes(term) ||
        room.status.toLowerCase().includes(term) ||
        room.location.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

<<<<<<< HEAD
  const handleAddRoom = () => {};
=======
  const handleAddRoom = (newRoomData) => {
    setRooms([...rooms, newRoomData]);
    setFilteredData([...rooms, newRoomData]);
  };
>>>>>>> 355d77ebaff37ef3575df58abd74d7f66bdd3038

  const handleUpdateRoom = (roomNumber, newStatus) => {
    const updatedRooms = rooms.map((room) =>
      room.roomNumber === roomNumber ? { ...room, status: newStatus } : room
    );
    setRooms(updatedRooms);
    setFilteredData(updatedRooms);
  };

  const handleDeleteRoom = (roomNumber) => {
    const updatedRooms = rooms.filter((room) => room.roomNumber !== roomNumber);
    setRooms(updatedRooms);
    setFilteredData(updatedRooms);
  };

  return (
    <>
<<<<<<< HEAD
      

{isSidebarToggled && (
				<div className="mobile-side-nav">
					<Sidebar />
				</div>
			)}

			<div className=" --flex-justify-between">
				<div className="desktop-side-nav">
					<Sidebar />
				</div>

				<div className="--flex-dir-column --overflow-y-auto --flex-1 --overflow-x-hidden">
					<main className="--flex-justify-center  w-full">
						<div className="dash-main">
							<div className=" --flex-justify-between">
								<h1>Hostel Room Listing</h1>
								{isSidebarToggled ? ( 
									<IoCloseSharp
										className="sidebar-toggle-icon "
										onClick={() => setIsSidebarToggled(false)}
									/>
								) : (
									<IoMenu
										className="sidebar-toggle-icon "
										onClick={() => setIsSidebarToggled(true)}
									/>
								)}
							</div>
							<input
								placeholder="Search by room number, status, or location"
								type="text"
								className="search"
								value={searchTerm}
								onChange={handleSearchChange}
							/>
							<RoomTable
								rooms={filteredData}
								onAddRoom={handleAddRoom}
								onUpdateRoom={handleUpdateRoom}
								onDeleteRoom={handleDeleteRoom}
							/>
						</div>
					</main>
				</div>
			</div>
=======
    <div>

    {isSidebarToggle && (
         <div className="mobile-side-nav">
         <Sidebar /> 
         </div>
      )}

    <div className="--flex-justify-between">
      <div className="desktop-side-nav">
        <Sidebar />
      </div>

      <div className="--flex-dir-column --overflow-y-auto --flex-One --overflow-x-hidden">
        <main className="--flex-justify-center w-full">
          <div className="right dash-main">
            <div className="--flex-justify-between">
              <h1>Hostel Room Listing</h1>

              { isSidebarToggle ? (
        <IoCloseOutline className="sidebar-toggle-iconB" 
        onClick={() => setIsSidebarToggle(false)}/>
      ) :(
           <IoMenu className="sidebar-toggle-iconB"
           onClick={() => setIsSidebarToggle(true)}/>
        )}
       
            </div>
            <input
              placeholder="Search by room number, status, or location"
              type="text"
              className="search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <RoomTable
              rooms={filteredData}
              onAddRoom={handleAddRoom}
              onUpdateRoom={handleUpdateRoom}
              onDeleteRoom={handleDeleteRoom}
            />
          </div>
        </main>
      </div>
    </div>
    </div>
    

>>>>>>> 355d77ebaff37ef3575df58abd74d7f66bdd3038
    </>
  );
};

export default Room;
