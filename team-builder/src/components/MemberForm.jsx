import React from 'react';

export default function MemberForm(props) {
    const { values, onInputChange, onSubmit } = props;

    return(
        <div>
            <h1>Join Our Team!</h1>
            <form className = 'form container' onSubmit = {onSubmit}>
                <div>
                    <label>Game Tag:&nbsp;&nbsp;
                        <input
                            id = 'gameTagInput'
                            type = 'text'
                            name = 'gameTag'
                            value = {values.gameTag}
                            maxLength = '50'
                            placeholder = 'Input Game Tag/Username'
                            onChange = {onInputChange}
                            required
                        />
                    </label>
                    <label>Win Rate:&nbsp;&nbsp;
                        <input
                            id = 'winRate'
                            type = 'number'
                            name = 'winRate'
                            value = {values.winRate}
                            min = '0'
                            max = '100'
                            placeholder = '50%'
                            onChange = {onInputChange}
                            required
                        />
                    </label>
                    <label>Role Call:&nbsp;&nbsp;
                        <select name = 'role' value = {values.role} onChange = {onInputChange} required>
                            <option value = ''>--Select Role--</option>
                            <option value = 'top'>Top</option>
                            <option value = 'jungle'>Jungle</option>
                            <option value = 'mid'>Mid</option>
                            <option value = 'bot'>Bot</option>
                            <option value = 'sup'>Sup</option>
                        </select>
                    </label>
                    <label>Main:&nbsp;&nbsp;
                        <input
                            id = 'mainInput'
                            type = 'text'
                            name = 'main'
                            value = {values.main}
                            maxLength = '20'
                            size = '10'
                            placeholder = 'Temmo'
                            onChange = {onInputChange}
                            required
                        />
                    </label>
                    <label>Preferred Class:&nbsp;&nbsp;
                        <select name = 'class' value = {values.class} onChange = {onInputChange} required>
                            <option value = ''>--Select Class--</option>
                            <option value = 'marksman'>Marksman</option>
                            <option value = 'mage'>Mage</option>
                            <option value = 'tank'>Tank</option>
                            <option value = 'assassin'>Assassin</option>
                            <option value = 'fighter'>Fighter</option>
                            <option value = 'controller'>Controller</option>
                        </select>
                    </label>
                    <br/>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}